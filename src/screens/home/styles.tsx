import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';
import OrdesNoAvailable from '@assets/icons/home_no_oc.svg';
interface AuthProps {
  theme?: TTheme;
  textImportant?: boolean;
  mt?: boolean;
}
export const HomeContainer = styled.View<AuthProps>`
  flex: 1;
  z-index: 1;
  width: 100%;
  elevation: 1;
  height: 100%;
  background-color: #ffffff;
`;

export const HomeScroll = styled.ScrollView<AuthProps>``;

export const HomeText = styled.Text<AuthProps>`
  color: #030f1c;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  font-style: normal;
  font-family: ${(props) => props.theme.fonts?.mainFont};
`;
export const HomeButton = styled.TouchableOpacity<AuthProps>`
  height: 45px;
  width: 283px;
  display: flex;
  margin-top: 38px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors?.primary};
`;
export const HomeButtonText = styled.Text<AuthProps>`
  font-size: 14px;
  line-height: 19px;
  font-style: normal;
  color: ${(props) => props.theme.colors?.secondary};
  font-family: ${(props) => props.theme.fonts?.mainFont};
`;
export const HomeButtonTest = styled(HomeButtonText)``;

export const HomeSalesFloorkContainer = styled.View<AuthProps>`
  flex: 1;
  padding: 0 0 20px 20px;
`;
export const HomeStockContainer = styled.View<AuthProps>`
  flex: 1;
  padding: 0px 0px 0px 20px;
`;

export const HomeSalesFloorImageOrderEmpty = styled(OrdesNoAvailable)<AuthProps>`
  margin: auto;
`;

export const HomeStockTitle = styled.Text<AuthProps>`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors?.black};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;

export const HomeStockSubtitle = styled.Text<AuthProps>`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors?.black};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;

export const HomeSalesFloorTitle = styled(HomeStockTitle)<AuthProps>`
  margin-top: 20px;
`;
export const StockTextUpdate = styled.Text<AuthProps>`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const HomeSearchContainer = styled.View<AuthProps>`
  padding: 0 18px 0 0;
`;

export const HomeSalesFloorSearchText = styled.Text<AuthProps>`
  font-size: 20px;
  margin-top: 20px;
  line-height: 28px;
  color: ${(props) => props.theme.colors?.black};
  font-family: ${(props) => props.theme.fonts?.GothamBold};
`;

export const HomeSalesFloorText = styled.Text<AuthProps>`
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors?.black};
  font-family: ${(props) => props.theme.fonts?.GothamMedium};
`;

export const HomeSalesFloorTextLasttUpdate = styled.Text<AuthProps>`
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;

export const HomeSalesFloorkCarousel = styled.FlatList<AuthProps>`
  flex-grow: 0;
  flex-shrink: 0;
  padding-right: 50px;
`;

export const HomeStockCarousel = styled.FlatList<AuthProps>`
  flex-grow: 0;
  flex-shrink: 0;
`;

export const TextNoResults = styled.Text<AuthProps>`
  font-size: ${({ textImportant }) => (textImportant ? '16px' : '14px')};
  line-height: ${({ textImportant }) => (textImportant ? '24px' : '19px')};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ textImportant, theme }) =>
    textImportant ? theme.fonts.GothamMedium : theme.fonts.mainFont};
`;
