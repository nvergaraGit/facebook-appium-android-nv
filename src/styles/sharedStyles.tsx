/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ThemeProps } from 'types/theme';
import { css, styled } from 'styled-components/native';
import { DELIVERED } from '@libraries/constants';

export const ContainerScreen = styled.View<ThemeProps>`
  padding: 5px 20px 20px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;
export const ListDivider = styled.View<ThemeProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.productsCardDivisorLine};
`;

export const ButtonNavigation = styled.TouchableOpacity<ThemeProps>`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  background-color: white;
`;

export const TextTitleGothamMediumBlack = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const TextTitleGothamBoldBlack = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const TextTitleGothamMediumDark = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const TextTitleGothamRegularBlack12 = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;
export const TextTitleGothamRegularDark12 = styled.Text<ThemeProps>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const TextTitleGothamMediumBlack14 = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const TextGoMeDark1416 = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const TextTitleMainFont = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const DateText = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;
export const TextNoResults = styled.Text<ThemeProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;
export const MainContainer = styled.View<ThemeProps>`
  background-color: white;
  flex: 1;
`;

export const MainContainerStatic = styled.View<ThemeProps>`
  background-color: white;
  flex: 1;
  padding-horizontal: 18px;
`;

/*** Start OrderCardStyles ***/
export const ContainerCard = styled.View<ThemeProps>`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  margin: 10px 0;
`;

export const ContainerTagCard = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: center;
  padding: 3px 8px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  ${(props) =>
    props.tag !== DELIVERED &&
    css`
      background-color: ${({ theme }) => theme.stateColors.fillRateBackgroundOrderTagReason};
      border: 1px solid ${({ theme }) => theme.stateColors.fillRatBorderOrderTagReason};
    `}
  ${(props) =>
    props.tag === DELIVERED &&
    css`
      background-color: ${({ theme }) => theme.stateColors.fillRateBackgroundOrderTagDelivered};
      border: 1px solid ${({ theme }) => theme.stateColors.fillRatBorderOrderTagDelivered};
    `}
`;

export const ContentContainerCard = styled.View<ThemeProps>`
  flex-direction: row;
`;

export const ContainerHeaderCard = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 10px 15px 10px 15px;
`;
export const ContainerTitleOrdersCard = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ showNSalesFloor }) => (showNSalesFloor ? '1px' : '0')};
`;
export const ContainerDataCard = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px 0px 15px;
`;
export const ContainerDetailsCard = styled.View<ThemeProps>``;
/*** End OrderCardStyles ***/

/*** Start DetailsItemGroup ***/
export const DetailsContainerData = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  padding: 10px 15px 0px 15px;
  margin: 10px 20px;
`;

export const DetailsContainerItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const DetailsContainerItemWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
export const DetailsContainerSubtitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  line-height: 19px;
`;

export const DetailsContainerValue = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  line-height: 19px;
`;

/*** End DetailsItemGroup ***/

export const NoResultScroll = styled.ScrollView<ThemeProps>``;

export const ContainerResult = styled.View<ThemeProps>`
  flex: 1;
  position: relative;
`;
