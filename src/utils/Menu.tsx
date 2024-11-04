import LogoutOption from '@assets/icons/icon-log-out.svg';
import AboutOption from '@assets/icons/icon-about-menu.svg';
import ProductOption from '@assets/icons/icon-product-menu.svg';
import CatalogsOption from '@assets/icons/icon-book-catalogs-menu.svg';
import FillRateOption from '@assets/icons/icon-fill-rate-menu.svg';
import BudgetGoalsOption from '@assets/icons/budget-goals.svg';
import HelpCenterOption from '@assets/icons/play_circle_outline.svg';
import React from 'react';
import { TMenu } from 'types/menu';
import {
  ANALITICS_ACTION_MENU_ABOUT,
  ANALITICS_ACTION_MENU_CATALOGS,
  ANALITICS_ACTION_MENU_LOGOUT,
  ANALITICS_ACTION_MENU_PRODUCTS,
  ANALITICS_HELP_CENTER,
} from '@libraries/constants';

export const MenuOptions: TMenu = [
  // {
  //   image: <BudgetGoalsOption />,
  //   title: 'Presupuesto y metas',
  //   path: 'BudgetGoals',
  //   analiticsAction: ANALITICS_ACTION_MENU_CATALOGS,
  // },
  {
    image: <FillRateOption />,
    title: 'Fill Rate general',
    path: 'FillRate',
    analiticsAction: ANALITICS_ACTION_MENU_CATALOGS,
  },
  {
    image: <CatalogsOption />,
    title: 'Stock Embonor',
    path: 'Stock',
    analiticsAction: ANALITICS_ACTION_MENU_CATALOGS,
  },
  {
    image: <ProductOption />,
    title: 'Productos',
    path: 'Products',
    analiticsAction: ANALITICS_ACTION_MENU_PRODUCTS,
  },
  {
    image: <HelpCenterOption />,
    title: 'Centro de ayuda',
    path: 'HelpCenter',
    analiticsAction: ANALITICS_HELP_CENTER,
  },
  {
    image: <AboutOption />,
    title: 'Acerca de la aplicación',
    path: 'About',
    analiticsAction: ANALITICS_ACTION_MENU_ABOUT,
  },
  // {
  //   image: <AboutOption />,
  //   title: 'Test',
  //   path: 'NoteRed',
  //   analiticsAction: ANALITICS_ACTION_MENU_ABOUT,
  // },
  {
    image: <LogoutOption />,
    title: 'Cerrar sesión',
    analiticsAction: ANALITICS_ACTION_MENU_LOGOUT,
  },
];
