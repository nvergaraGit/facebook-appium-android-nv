import React from 'react';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import { FillRateStackParamList } from 'types/fillRate';
import FillRateWeeklyList from '@screens/FillRateWeeklyList/FillRateWeeklyList';
import FillRateDetailsList from '@screens/FillRateDetailsList/FillRateDetailsList';
import FillRateDetail from '@screens/FillRateDetail/FillRateDetail';
import { SalesFloorsDetailsStack } from './salesFloorNavigator';
import DetailsProductsScreen from '@components/DetailsProducts/DetailsProducts';

const FillRateStack = createStackNavigator<FillRateStackParamList>();
type Props = StackScreenProps<SalesFloorsDetailsStack, 'FillRateWeekly'>;

const FillRateNavigator = ({ route }: Props) => {
  const { salesFloor } = route.params;
  return (
    <FillRateStack.Navigator initialRouteName="FillRateWeeklyListContainer">
      <FillRateStack.Screen
        name="FillRateWeeklyListContainer"
        component={FillRateWeeklyList}
        options={{ headerShown: false }}
        initialParams={{ salesFloor: salesFloor }}
      />
      <FillRateStack.Screen
        name="FillRateDetailsList"
        component={FillRateDetailsList}
        options={{ headerShown: false }}
      />
      <FillRateStack.Screen
        name="FillRateDetail"
        component={FillRateDetail}
        options={{ headerShown: false }}
      />
      <FillRateStack.Screen
        name="DetailsProducts"
        component={DetailsProductsScreen}
        options={{ headerShown: false }}
      />
    </FillRateStack.Navigator>
  );
};

export default FillRateNavigator;
