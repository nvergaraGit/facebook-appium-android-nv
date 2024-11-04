/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument*/
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useState, useEffect } from 'react';
import {
  NotificationsCard,
  NotificationsBody,
  NotificationsTime,
  NotificationsTitle,
  NotificationDivider,
  NotificationsContent,
  NotificationsContainer,
  NotificationBulletPoint,
  NotificationsDescription,
  NotificationsHeaderContainer,
  NotificationsContainerSearch,
} from './styles';
import dayjs from 'dayjs';
import { useLazyQuery } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
import { NotificationData } from 'types/notifications';
import { NotificationsStack } from 'types/notifications';
import SearchInput from '@components/SearchInput/SearchInput';
import { StackNavigationProp } from '@react-navigation/stack';
import GetInboxMessages from '@graphql/queries/getInboxMessages';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Notifications = () => {
  const title = 'Notificaciones';
  const [notificationsText, setNotificationsText] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<NotificationsStack>>();
  const [notificationsData, setNotificationsData] = useState<NotificationData[] | undefined>();

  const [GetInboxMessagesQuery] = useLazyQuery(GetInboxMessages, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    void GetInboxMessagesQuery({
      variables: {
        getInboxMessagesInput: {
          limitId: '',
          asc: 'true',
          category: '',
          search: '',
          state: '',
        },
      },
      onCompleted: (result) => {
        setNotificationsData(result.getInboxMessages.data);
      },
      onError: () => {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void GetInboxMessagesQuery({
      variables: {
        getInboxMessagesInput: {
          limitId: '',
          asc: 'true',
          category: '',
          search: notificationsText,
          state: '',
        },
      },
      onCompleted: (result) => {
        setNotificationsData(result.getInboxMessages.data);
      },
      onError: () => {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationsText]);

  useFocusEffect(
    React.useCallback(() => {
      void GetInboxMessagesQuery({
        variables: {
          getInboxMessagesInput: {
            limitId: '',
            asc: 'true',
            category: '',
            search: '',
            state: '',
          },
        },
        onCompleted: (result) => {
          console.log('notificatios', result);
          setNotificationsData(result.getInboxMessages.data);
        },
        onError: () => {},
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const handleChange = (text: string) => {
    setNotificationsText(text);
  };

  const showFilter = () => {};

  const detailsNotifications = (item: NotificationData) => {
    navigation.navigate('NotificationsDetails', { notification: item });
  };

  return (
    <NotificationsContainer>
      <HeaderDetailScreenNavigation title={title} goBack={() => navigation.goBack()} />
      <NotificationsContainerSearch>
        <SearchInput
          placeholder="Búsqueda de mensajes..."
          value={notificationsText}
          onSearch={(text) => handleChange(text)}
          showFilter
          onFilter={showFilter}
        />
      </NotificationsContainerSearch>
      <NotificationsContent>
        {notificationsData &&
          notificationsData.map((item: NotificationData) => (
            <>
              <NotificationsCard
                open={item.status === 'opened'}
                onPress={() => detailsNotifications(item)}
              >
                <NotificationsHeaderContainer>
                  <NotificationBulletPoint open={item.status === 'opened'} />
                  <NotificationsTitle numberOfLines={1} ellipsizeMode="tail">
                    {item.title}
                  </NotificationsTitle>
                  <NotificationsTime>{dayjs(item.createdAt).format('h:mm A')}</NotificationsTime>
                </NotificationsHeaderContainer>
                <NotificationsBody>
                  <NotificationsDescription numberOfLines={2} ellipsizeMode="tail">
                    {item.body}
                  </NotificationsDescription>
                </NotificationsBody>
              </NotificationsCard>
              <NotificationDivider />
            </>
          ))}
      </NotificationsContent>
    </NotificationsContainer>
  );
};

export default WithApollo(Notifications);
