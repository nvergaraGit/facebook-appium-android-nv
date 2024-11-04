import { PATTERN_TYPE } from '@libraries/constants';
import { theme } from '@styles/themes';

export type TTheme = {
  colors: {
    primary: string;
    secondary: string;
    authText: string;
    authForgotEmail: string;
    authError: string;
    authBorderInput: string;
    authValidate: string;
    authForgot: string;
    dark: string;
    primaryNav: string;
    productsFinder: string;
    productsCardSkuText: string;
    productsCardTextDescription: string;
    productsCardDivisorLine: string;
    light: string;
    grayScale: string;
    stateSuccess: string;
    stateRemoved: string;
    catalogCardTitle: string;
    stateProgrammed: string;
    headerCards: string;
    withoutStock: string;
    lowStock: string;
    withStock: string;
    black: string;
    celeste: string;
    stateCatalogFirst: string;
    stateCatalogSecond: string;
    stateCatalogFirstBorder: string;
    stateCatalogSecondBorder: string;
    primaryText: string;
    infoText: string;
    categoriesSubtitle: string;
    subtitleOrder: string;
    headerTitle: string;
    cardNotifications: string;
    dividerCard: string;
    dividerLine: string;
    borderTabReview: string;
    borderCardReview: string;
    backgroundSelected: string;
    commentButton: string;
    stateTypeCatalogs: string;
    stateTypeExhibitions: string;
    disabledButton: string;
    stateDone: string;
    statePending: string;
    downloadBackground: string;
    textDownloadReportsList: string;
    disabled: string;
    textFilterPresale: string;
    categoriesSubtitleCard: string;
  };
  fonts: {
    mainFont: string;
    secondaryFont: string;
    GothamMedium: string;
    GothamBold: string;
  };
  stateColors: {
    receivedText: string;
    receivedBackground: string;
    programmedText: string;
    programmedBackground: string;
    detainedText: string;
    detainedBackground: string;
    deletedText: string;
    deletedBackground: string;
    orderReceived?: string;
    downStockText: string;
    downStockBackground: string;
    fillRatBorderOrderTagDelivered: string;
    fillRateBackgroundOrderTagDelivered: string;
    fillRatBorderOrderTagReason: string;
    fillRateBackgroundOrderTagReason: string;
  };
};

export interface ThemeProps {
  theme?: TTheme;
  textImportant?: boolean;
  isImportant?: boolean;
  tag?: string;
  showNSalesFloor?: boolean;
}

export const PATTERN_BTN_COLOR = {
  [PATTERN_TYPE.FIRST]: () => {
    return {
      backGroundColor: theme.colors.stateCatalogFirst,
      borderColor: theme.colors.stateCatalogFirstBorder,
      textColor: theme.colors.stateCatalogFirstBorder,
    };
  },
  [PATTERN_TYPE.SECOND]: () => {
    return {
      backGroundColor: theme.colors.stateCatalogSecond,
      borderColor: theme.colors.stateCatalogSecondBorder,
      textColor: theme.colors.stateCatalogSecondBorder,
    };
  },
};
