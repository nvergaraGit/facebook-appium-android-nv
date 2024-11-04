import { API_KEY } from '@env';
import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const rnFetchDownloader = async (url: string, filenameWithExtension?: string) => {
  return new Promise((resolve) => {
    if (!url) resolve(true);
    // define file name and extension

    if (!filenameWithExtension) {
      // get filename from end url path
      const filenameWithPlus = url.substring(url.lastIndexOf('/') + 1);
      filenameWithExtension = filenameWithPlus.replace(/\+/g, ' ');
    }

    // get file name and extension
    const filenameSplitted = filenameWithExtension.split('.');
    const filename = filenameSplitted.shift() ?? '';
    const fileExtension = filenameSplitted.pop() ?? '';

    if (!filename || !fileExtension) resolve(true);

    console.log('La extensión del archivo es:', fileExtension);

    // prepare download for android and ios

    const { dirs } = RNFetchBlob.fs;
    const dirToSave = Platform.OS == 'ios' ? dirs.DocumentDir : dirs.DownloadDir;

    // define android download specs

    const configfb = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: filename,
        path: `${dirToSave}/${filename}.${fileExtension}`,
      },
      useDownloadManager: true,
      notification: true,
      mediaScannable: true,
      title: filename,
      path: `${dirToSave}/${filename}.${fileExtension}`,
    };

    // define ios download specs

    const configOptions = Platform.select({
      ios: configfb,
      android: configfb,
    });

    // download file

    RNFetchBlob.config(configOptions || {})
      .fetch('GET', url, { apikey: API_KEY })
      .then(async (resp) => {
        if (Platform.OS === 'ios') {
          await RNFetchBlob.fs.writeFile(configfb.path, resp.data as string, 'base64');
          RNFetchBlob.ios.previewDocument(configfb.path);
        }
        console.log(`Archivo: ${filename}.${fileExtension} descargado exitosamente`);
        resolve(true);
      })
      .catch((err) => {
        console.log(`Error al descargar archivo: ${filename}.${fileExtension}`, err);
        resolve(true);
      });
  });
};

export const fileDownloader = async (url: string, filenameWithExtension?: string) => {
  // ** falta corregir permisos para todos los dispositivos por medio del API LEVEL

  // if (Platform.OS === 'android') {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //   );
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     await rnFetchDownloader(url, filenameWithExtension);
  //   } else {
  //     console.log('Permiso para descargar archivo no fue aceptado por el usuario');
  //   }
  // } else {
  //   await rnFetchDownloader(url, filenameWithExtension);
  // }
  await rnFetchDownloader(url, filenameWithExtension);
};
