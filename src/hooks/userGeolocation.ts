import Geolocation, {
  GeolocationResponse,
  GeolocationError,
} from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
  enableBackgroundLocationUpdates: false,
});

type UseGeolocationReturnType = {
  error: GeolocationError | undefined;
  getCurrentLocation: () => Promise<GeolocationResponse['coords']>;
};

export const useGeolocation = (): UseGeolocationReturnType => {
  const [error, setError] = useState<GeolocationError>();

  useEffect(() => {
    Geolocation.requestAuthorization(
      () => {
        setError(undefined);
      },
      (_error) => {
        setError(_error);
      },
    );
  }, []);

  const getCurrentLocation = async (): Promise<GeolocationResponse['coords']> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (response) => {
          resolve(response.coords);
        },
        (_error) => reject(_error),
      );
    });
  };

  return {
    error,
    getCurrentLocation,
  };
};
