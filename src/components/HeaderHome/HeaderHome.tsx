/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument*/

import React, { useState } from 'react';
import {
  HeaderHomeTitle,
  HeaderHomeTitles,
  HeaderHomeContent,
  HeaderHomeContainer,
  HeaderHomeStatusBar,
  HeaderHomeWelcomeText,
  HeaderHomeTitleContainer,
} from './styles';
// import { useLazyQuery } from '@apollo/client';
import WithApollo from '@components/hocs/WithApollo';
// import { NotificationData } from 'types/notifications';
// import GetInboxMessages from '@graphql/queries/getInboxMessages';
// import { useFocusEffect } from '@react-navigation/native';
interface Props {
  title?: string;
  backgroundColor?: string;
  hasFooter?: boolean;
  footer?: JSX.Element;
}

const Header = ({ backgroundColor, title, hasFooter, footer }: Props) => {
  // const [, setNotificationLength] = useState<number>(0);

  // const [GetInboxMessagesQuery] = useLazyQuery(GetInboxMessages, {
  //   fetchPolicy: 'network-only',
  // });

  // useFocusEffect(
  //   React.useCallback(() => {
  //     void GetInboxMessagesQuery({
  //       variables: {
  //         getInboxMessagesInput: {
  //           asc: 'true',
  //         },
  //       },
  //       onCompleted: (result) => {
  //         const openedNotifications = result.getInboxMessages.data.filter(
  //           (item: NotificationData) => item.status !== 'opened',
  //         );
  //         setNotificationLength(openedNotifications.length);
  //       },
  //       onError: () => {},
  //     });
  //   }, []),
  // );

  return (
    <>
      <HeaderHomeStatusBar backgroundColor={backgroundColor} />
      <HeaderHomeContainer>
        <HeaderHomeContent>
          <HeaderHomeTitles>
            <HeaderHomeTitleContainer>
              <HeaderHomeTitle>Hola, {title}.</HeaderHomeTitle>
              <HeaderHomeTitle numberOfLines={1} ellipsizeMode="tail">
                👋
              </HeaderHomeTitle>
            </HeaderHomeTitleContainer>
            <HeaderHomeWelcomeText numberOfLines={1} ellipsizeMode="tail">
              Bienvenido a Canal Moderno
            </HeaderHomeWelcomeText>
          </HeaderHomeTitles>
          {/* <HeaderHomeNotificationsContainer onPress={() => navigation.navigate('Notifications')}>
            {notificationLength > 0 && (
              <HeaderHomeNotificationQty>
                <HeaderHomeNotificationQtyText>{notificationLength}</HeaderHomeNotificationQtyText>
              </HeaderHomeNotificationQty>
            )}
            <HeaderHomeIconBellContainer>
              <BellNotifications />
            </HeaderHomeIconBellContainer>
          </HeaderHomeNotificationsContainer> */}
        </HeaderHomeContent>
        {hasFooter && footer}
      </HeaderHomeContainer>
    </>
  );
};

export default WithApollo(Header);
