import React from 'react';
import AuthScreen from '@screens/auth';
import { createStackNavigator } from '@react-navigation/stack';
import ForgetPassword from '@screens/ForgetPassword/ForgetPassword';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={AuthScreen} />
      <AuthStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
