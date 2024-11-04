import React from 'react';
import SodaDrinks from '@assets/icons/SSD.svg';
import BottlesWater from '@assets/icons/aguas.svg';
import JuicesBottles from '@assets/icons/NCBS.svg';
import AlcoholBottles from '@assets/icons/Alcoholes.svg';
import SnowCup from '@assets/icons/congelados.svg';
import Cereal from '@assets/icons/cereales.svg';
import CannedFood from '@assets/icons/conservas.svg';
import IceCream from '@assets/icons/helados.svg';
import { View } from 'react-native';

export const getImageForCategoryOC = (category: string | string[]): React.ReactNode => {
  if (Array.isArray(category)) {
    return category.map((cat, index) => (
      <View key={index} style={{ marginHorizontal: 10 }}>
        {getImageForCategoryOC(cat)}
      </View>
    ));
  } else {
    switch (category) {
      case 'SSD':
        return <SodaDrinks key="SSD" />;
      case 'AGUAS':
        return <BottlesWater key="AGUAS" />;
      case 'NCBS':
        return <JuicesBottles key="NCBS" />;
      case 'ALCOHOLES':
        return <AlcoholBottles key="ALCOHOLES" />;
      case 'CONGELADOS':
        return <SnowCup key="CONGELADOS" />;
      case 'CEREAL':
        return <Cereal key="CEREAL" />;
      case 'CONSERVAS':
        return <CannedFood key="CONSERVAS" />;
      case 'HELADOS':
        return <IceCream key="HELADOS" />;
      default:
        return null;
    }
  }
};
