import { CategoriesType } from 'types/catalogs';
import React from 'react';
import SodaDrinks from '@assets/icons/icon-drinks-color.svg';
import BottlesWater from '@assets/icons/icon-bottle-water.svg';
import JuicesBottles from '@assets/icons/icon-bottle-juice.svg';
import AlcoholBottles from '@assets/icons/icon-bottle-alcohol.svg';
import SnowCup from '@assets/icons/icon-snow-cup.svg';
import Cereal from '@assets/icons/icon-cereal.svg';
import CannedFood from '@assets/icons/icon-canned-food.svg';
import IceCream from '@assets/icons/icon-ice-cream.svg';

export const Categories: CategoriesType[] = [
  {
    id: 1,
    icon: <SodaDrinks />,
    nameCategory: 'SSD',
    amount: 0,
    formats: [],
  },
  {
    id: 2,
    icon: <BottlesWater />,
    nameCategory: 'Aguas',
    amount: 0,
    formats: [],
  },
  {
    id: 3,
    icon: <JuicesBottles />,
    nameCategory: 'NCBS',
    amount: 0,
    formats: [],
  },
  {
    id: 4,
    icon: <AlcoholBottles />,
    nameCategory: 'Alcoholes',
    amount: 0,
    formats: [],
  },
  {
    id: 5,
    icon: <SnowCup />,
    nameCategory: 'Congelados',
    amount: 0,
    formats: [],
  },
  {
    id: 6,
    icon: <Cereal />,
    nameCategory: 'Cereal',
    amount: 0,
    formats: [],
  },
  {
    id: 7,
    icon: <CannedFood />,
    nameCategory: 'Conservas',
    amount: 0,
    formats: [],
  },
  {
    id: 8,
    icon: <IceCream />,
    nameCategory: 'Helados',
    amount: 0,
    formats: [],
  },
];
