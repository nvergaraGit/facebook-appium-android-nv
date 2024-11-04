import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationsStack } from 'types/notifications';
import Notifications from '@components/Notifications/Notifications';
import NotificationsDetails from '@components/NotificationsDetails/NotificationsDetails';

const NotificationsNavigatorStack = createStackNavigator<NotificationsStack>();

const NotificationsNavigator = () => {
  return (
    <NotificationsNavigatorStack.Navigator initialRouteName="Notifications">
      <NotificationsNavigatorStack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <NotificationsNavigatorStack.Screen
        name="NotificationsDetails"
        component={NotificationsDetails}
        options={{ headerShown: false }}
      />
    </NotificationsNavigatorStack.Navigator>
  );
};

export default NotificationsNavigator;
