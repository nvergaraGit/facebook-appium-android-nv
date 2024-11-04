/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { useEffect } from 'react';
import {
  NotificationsDetailsTitle,
  NotificationsDetailsContent,
  NotificationsDetailsContainer,
  NotificationsDetailsDescription,
} from './styles';
import { useMutation } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
import { NotificationsStack } from 'types/notifications';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import UpdateInboxMessage from '@graphql/mutations/updateInboxMessage';

type Props = StackScreenProps<NotificationsStack, 'NotificationsDetails'>;

const NotificationsDetails = ({ route }: Props) => {
  const { notification } = route.params;
  const title = 'Detalle de notificación';
  const navigation = useNavigation();

  const [UpdateInboxMessageQuery] = useMutation(UpdateInboxMessage, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    // console.log('valor de codigo de cliente', salesFloor.codClient.toString())
    // if (!isInternet) {
    //   setModalInternetConnection(true);
    //   return;
    // }

    void UpdateInboxMessageQuery({
      variables: {
        updateInboxMessageInput: {
          pairId: notification.pairId,
          status: 'opened',
        },
      },
      onCompleted: (result) => {
        console.log(result);
      },
      onError: () => {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NotificationsDetailsContainer>
      <HeaderDetailScreenNavigation title={title} goBack={() => navigation.goBack()} />
      <NotificationsDetailsContent>
        <NotificationsDetailsTitle>{notification.title}</NotificationsDetailsTitle>
        <NotificationsDetailsDescription>{notification.body}</NotificationsDetailsDescription>
        {/* <NotificationsDetailsImage source={require('@assets/notification-images.png')} /> */}
      </NotificationsDetailsContent>
    </NotificationsDetailsContainer>
  );
};

export default WithApollo(NotificationsDetails);
