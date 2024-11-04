import analytics from '@react-native-firebase/analytics';
import { TAuth } from 'types/auth';

export function registerFirebaseAnaliticsEvent(
  eventCatgory: string,
  eventAction: string,
  auth?: TAuth,
): void {
  const user_id = auth?.id || '';
  const username = auth?.username || '';
  const name = auth?.name || '';

  console.log(
    `Firebase Analitics - Registrando evento ${eventAction} por parte del usuario ${username}`,
  );

  analytics()
    .logEvent(eventAction, {
      content_type: eventCatgory,
      user_id,
      username,
      name,
    })
    .then(() =>
      console.log(
        `Firebase Analitics - Evento ${eventCatgory} de parte del usuario ${username} registrado exitosamente`,
      ),
    )
    .catch(() =>
      console.error(
        `Firebase Analitics - Error al registrar evento ${eventCatgory} de parte del usuario ${username}`,
      ),
    );
}
