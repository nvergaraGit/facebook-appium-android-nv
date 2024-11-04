/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import { B2BContent, B2BContainer } from './Styles';
import { useAppContext } from '@context/state';
import { useNavigation } from '@react-navigation/native';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import {
  ANALITICS_ACTION_SALES_FLOOR_RED_NOTE,
  ANALITICS_ACTION_SALES_FLOOR_B2B,
  ANALITICS_ACTION_SALES_FLOOR_B2B_GHOST_STOCK,
  ANALITICS_ACTION_SALES_FLOOR_B2B_0_SALES,
} from '@libraries/constants';
import B2BCard from '@components/B2BCard/B2BCard';
import PhantomStock from '@assets/icons/phantom-stock.svg';
import ZeroSales from '@assets/icons/zero-sales.svg';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'B2B'>;

const B2B = ({ route }: Props) => {
  const { b2bInfo } = route.params;
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const { auth } = useAppContext();

  const goToCategories = (title: string) => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_ACTION_SALES_FLOOR_B2B,
      ANALITICS_ACTION_SALES_FLOOR_RED_NOTE,
      auth,
    );
    if (title === 'Stock Fantasma') {
      registerFirebaseAnaliticsEvent(
        ANALITICS_ACTION_SALES_FLOOR_B2B,
        ANALITICS_ACTION_SALES_FLOOR_B2B_GHOST_STOCK,
        auth,
      );
      navigation.navigate('B2BCategories', {
        title: title,
        b2bInfo: b2bInfo,
      });
    } else {
      registerFirebaseAnaliticsEvent(
        ANALITICS_ACTION_SALES_FLOOR_B2B,
        ANALITICS_ACTION_SALES_FLOOR_B2B_0_SALES,
        auth,
      );
      navigation.navigate('B2BCategories', {
        title: title,
        b2bInfo: b2bInfo,
      });
    }
  };

  const B2BCategories = [
    {
      title: 'Stock Fantasma',
      icon: <PhantomStock />,
      qty: b2bInfo?.stockFantasma.length,
      enabled: false,
      status: 'up',
      onPress: goToCategories,
    },
    {
      title: 'Venta 0',
      icon: <ZeroSales />,
      qty: b2bInfo?.ventaCero.length,
      enabled: false,
      status: 'up',
      onPress: goToCategories,
    },
  ];

  return (
    <>
      <HeaderDetailScreenNavigation title="Información B2B" goBack={() => navigation.goBack()} />
      <B2BContainer>
        <B2BContent>
          {B2BCategories.map(
            (item, index) =>
              item.qty !== 0 &&
              item.qty !== undefined &&
              item.qty !== null && (
                <B2BCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  qty={item.qty}
                  enabled={item.enabled}
                  status={item.status}
                  onPress={() => item.onPress(item.title)}
                />
              ),
          )}
        </B2BContent>
      </B2BContainer>
    </>
  );
};

export default B2B;
