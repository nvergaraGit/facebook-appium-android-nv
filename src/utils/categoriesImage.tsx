import React from 'react';
import SodaDrinks from '@assets/icons/icon-drinks-color.svg';
import BottlesWater from '@assets/icons/icon-bottle-water.svg';
import JuicesBottles from '@assets/icons/icon-bottle-juice.svg';
import AlcoholBottles from '@assets/icons/icon-bottle-alcohol.svg';
import SnowCup from '@assets/icons/icon-snow-cup.svg';
import Cereal from '@assets/icons/icon-cereal.svg';
import CannedFood from '@assets/icons/icon-canned-food.svg';
import IceCream from '@assets/icons/icon-ice-cream.svg';

export const getImageForCategory = (category: string | string[]): React.ReactNode => {
  if (Array.isArray(category)) {
    return category.map((cat) => getImageForCategory(cat));
  } else {
    switch (category) {
      case 'SSD':
        return <SodaDrinks />;
      case 'AGUAS':
        return <BottlesWater />;
      case 'NCBS':
        return <JuicesBottles />;
      case 'ALCOHOLES':
        return <AlcoholBottles />;
      case 'CONGELADOS':
        return <SnowCup />;
      case 'CEREAL':
        return <Cereal />;
      case 'CONSERVAS':
        return <CannedFood />;
      case 'HELADOS':
        return <IceCream />;
      default:
        return null;
    }
  }
};
