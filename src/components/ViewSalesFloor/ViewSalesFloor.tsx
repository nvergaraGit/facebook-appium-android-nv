import React, { useEffect, useState } from 'react';
import { ContainerData, ContainerVersion, TextLabel, TextRegular, TextValue } from './styles';
import { TSalesFloor } from 'types/salesFloors';
import { getApps, GetAppResult } from 'react-native-map-link';
import proj4 from 'proj4';
import { Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';
interface Props {
  salesFloor: TSalesFloor | null;
}
function ViewSalesFloor({ salesFloor }: Props) {
  proj4.defs('EPSG:32719', '+proj=utm +zone=19 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs');
  proj4.defs('EPSG:4326', '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs');
  const [availableApps, setAvailableApps] = useState<GetAppResult[]>([]);

  const utmCoordinates = [
    parseInt(salesFloor?.coordX as string),
    parseInt(salesFloor?.coordY as string),
  ];
  const latLngCoordinates = proj4('EPSG:32719', 'EPSG:4326', utmCoordinates);
  const iframeMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14313.840896533779!2d${latLngCoordinates[0].toString()}!3d${latLngCoordinates[1].toString()}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1698931826938!5m2!1ses!2sve" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const result = await getApps({
        latitude: latLngCoordinates[1],
        longitude: latLngCoordinates[0],
        title: salesFloor?.csalaSupermercado,
        googleForceLatLon: false,
        alwaysIncludeGoogle: true,
        appsWhiteList: ['google-maps'],
      });
      setAvailableApps(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerVersion>
      {salesFloor === null ? (
        <TextRegular>El visor ha fallado</TextRegular>
      ) : (
        <>
          <TextRegular style={{ textAlign: 'center' }}>Detalles de la sala</TextRegular>
          <ScrollView>
            <ContainerData>
              <TextLabel>Código</TextLabel>
              <TextValue>{salesFloor.codClient}</TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Rut cliente</TextLabel>
              <TextValue>{salesFloor.rut.trim()}</TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Razón social</TextLabel>
              <TextValue>{salesFloor.razonSocial.trim()}</TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Última visita</TextLabel>
              <TextValue>-</TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Frecuencia de entrega</TextLabel>
              <TextValue>{salesFloor.dfrecProg.trim()}</TextValue>
            </ContainerData>

            <ContainerData style={{ marginTop: 30 }}>
              <TextLabel style={{ width: '50%' }}>Nombre de fantasía</TextLabel>
              <TextValue style={{ width: '50%', textAlign: 'right' }} numberOfLines={1}>
                {salesFloor.csalaSupermercado.trim()}
              </TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Cadena</TextLabel>
              <TextValue>{salesFloor.dcadena.trim()}</TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Sucursal</TextLabel>
              <TextValue>{salesFloor.dsucursal.trim()}</TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Planta</TextLabel>
              <TextValue>{salesFloor.dplanta.trim()}</TextValue>
            </ContainerData>

            <ContainerData style={{ marginTop: 30 }}>
              <TextLabel>Calle y número</TextLabel>
              <TextValue>
                {salesFloor.calle.trim()}, {salesFloor.numero.trim()}
              </TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Región y provincia</TextLabel>
              <TextValue>
                {salesFloor.dregion.trim()}, {salesFloor.dprovincia.trim()}
              </TextValue>
            </ContainerData>
            <ContainerData>
              <TextLabel>Comuna</TextLabel>
              <TextValue>{salesFloor.dcomuna.trim()}</TextValue>
            </ContainerData>
            <ContainerData>
              {availableApps.map(({ id, open }) => (
                <Pressable style={{ height: 200, width: '100%' }} key={id} onPress={open}>
                  <WebView
                    source={{ html: iframeMap }}
                    style={{ marginTop: 20, height: 100, width: 500 }}
                  />
                </Pressable>
              ))}
            </ContainerData>
          </ScrollView>
        </>
      )}
    </ContainerVersion>
  );
}
export default ViewSalesFloor;
