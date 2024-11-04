import styled from 'styled-components/native';
import { TTheme } from 'types/theme';
interface ThemeProps {
  theme?: TTheme;
  filterRefresh?: boolean;
}
export const ContainerFilters = styled.View<ThemeProps>`
  margin: 0 20px;
  padding-bottom: 20px;
`;
export const Title = styled.Text<ThemeProps>`
  font-family: ${(props) => props.theme.fonts?.GothamBold};
  font-size: 16px;
  color: black;
  line-height: 24px;
  margin-bottom: 15px;
  text-align: center;
`;
export const ContainerSelect = styled.TouchableOpacity<ThemeProps>`
  border: ${(props) => props.theme?.colors?.productsCardDivisorLine};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
`;
export const TitleLabel = styled.Text<ThemeProps>`
  font-family: ${(props) => props.theme.fonts?.mainFont};
  font-size: 16px;
  color: ${(props) => props.theme?.colors?.dark};
  line-height: 24px;
`;
export const TextValue = styled.Text<ThemeProps>`
  font-family: ${(props) => props.theme.fonts?.GothamBold};
  font-size: 16px;
  color: ${(props) => props.theme?.colors?.dark};
  line-height: 24px;
  margin-right: 8px;
`;

export const ContainerTitleRefresh = styled.View<ThemeProps>`
  flex-direction: row;
  justify-content: ${(props) => (props.filterRefresh ? 'space-between' : 'center')};
`;

export const ContainerRefresh = styled.TouchableOpacity<ThemeProps>`
  height: 25px;
  flex-direction: row;
  align-items: center;
`;

export const TitleRefresh = styled.Text<ThemeProps>`
  font-size: 14px;
  margin-left: 5px;
  line-height: 19px;
  font-family: ${(props) => props.theme.fonts?.mainFont};
  color: ${(props) => props.theme?.stateColors?.downStockText};
`;
