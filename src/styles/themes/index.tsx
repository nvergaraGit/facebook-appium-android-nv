import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TTheme } from '../../types/theme';

export const theme: TTheme = {
  colors: {
    primary: '#AF0101',
    secondary: '#FFFFFF',
    authText: '#030F1C',
    authForgotEmail: '#C00000',
    authError: '#9C0000',
    authForgot: '#666666',
    authBorderInput: '#F40009',
    authValidate: '#E00000',
    dark: '#5F6F86',
    primaryNav: '#F40009',
    productsFinder: '#5E6368',
    productsCardSkuText: '#5F6F86',
    productsCardTextDescription: '#000000',
    productsCardDivisorLine: '#E8EBF7',
    light: '#F7F9FC',
    grayScale: '#111827',
    stateSuccess: '#12C269',
    stateCatalogFirstBorder: '#12C269',
    stateCatalogSecondBorder: '#1B4BC7',
    stateCatalogFirst: '#EAFFF4',
    stateCatalogSecond: '#E9EDF8',
    stateRemoved: '#5F6F86',
    catalogCardTitle: '#5F6F86',
    stateProgrammed: '#1B4BC7',
    headerCards: '#F9FAFB',
    withoutStock: '#C00000',
    lowStock: '#F8961E',
    withStock: '#12C269',
    black: '#000000',
    celeste: '#ECF6FF',
    primaryText: '#F40009',
    infoText: '#030F1C',
    categoriesSubtitle: '#81878E',
    subtitleOrder: '#5E7083',
    headerTitle: '#F1F5F9',
    cardNotifications: '#FEE5E6',
    dividerCard: '#0000001A',
    dividerLine: '#E6ECF4',
    borderTabReview: '#ECF1F7',
    borderCardReview: '#CCD8E5',
    backgroundSelected: '#F400091A',
    commentButton: '#D04040',
    stateTypeCatalogs: '#1890FF',
    stateTypeExhibitions: '#6C006F',
    disabledButton: '#C0C3C6',
    stateDone: '#4DD18F',
    statePending: '#F4C86F',
    downloadBackground: '#CEE8FF',
    textDownloadReportsList: '#354455',
    disabled: '#7B7D7E',
    textFilterPresale: '#424B55',
    categoriesSubtitleCard: '#9BB0C7',
  },
  fonts: {
    mainFont: 'Gotham-Book',
    secondaryFont: 'Gotham-Light',
    GothamMedium: 'Gotham-Medium',
    GothamBold: 'Gotham-Bold',
  },
  stateColors: {
    receivedText: '#4BB543',
    receivedBackground: '#EAFFF4',
    programmedText: '#1B4BC7',
    programmedBackground: '#E9EDF8',
    detainedText: '#9C0000',
    detainedBackground: '#F5E5E5',
    deletedText: '#5F6F86',
    deletedBackground: '#EFF1F3',
    downStockText: '#F0B63F',
    downStockBackground: '#FEF8EC',
    fillRatBorderOrderTagDelivered: '#3FE793',
    fillRateBackgroundOrderTagDelivered: '#E7F9F0',
    fillRatBorderOrderTagReason: '#FFCCCE',
    fillRateBackgroundOrderTagReason: '#FFEAEB',
  },
};

interface Props {
  children: React.ReactNode;
}

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
