import styled from 'styled-components/native';
import { TTheme } from '../../types/theme';
interface ThemeProps {
  theme?: TTheme;
  stock?: string;
}
export const DetailsProductsContainer = styled.View`
  padding: 30px 24px 40px 24px;
  background: white;
`;
export const DetailsProductsContainerHeader = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const DetailsProductsTitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme }) => theme.colors.grayScale};
  font-size: 20px;
  line-height: 28px;
  padding-left: 10px;
`;
export const DetailsProductsContainerItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const DetailsProductsSubtitle = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: #000;
  font-size: 14px;
  line-height: 19px;
`;
export const DetailsProductsValue = styled.Text<ThemeProps>`
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  color: #000;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 8px;
`;

export const DetailesProductsCategory = styled(DetailsProductsValue)<ThemeProps>`
  margin-bottom: 0px;
`;

export const DetailsProductsContainerImg = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0px 0px 30px 30px;
`;
export const DetailsProductsContainerData = styled.View<ThemeProps>`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  margin-top: 8px;
  margin-bottom: 30px;
`;
export const DetailsProductsContainerDataStock = styled.View<ThemeProps>`
  background-color: ${(props) =>
    props.stock === '0' ? props.theme.stateColors.detainedBackground : props.theme.colors.celeste};
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  margin-top: 10px;
  margin-bottom: 8px;
`;
export const AuthContainerHeaderImage = styled.Image`
  width: 50%;
  margin: 20px auto;
`;

export const HeaderImageDefault = styled.View`
  margin: 20px auto;
`;
export const Container = styled.View<ThemeProps>`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.productsCardDivisorLine};
  margin: 8px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
  align-items: center;
  background: white;
`;
export const TitleBarra = styled.Text<ThemeProps>`
  font-size: 14px;
  line-height: 18px;
  color: #354455;
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
  padding-left: 5px;
`;
export const DetailsProductsModalBackdrop = styled.View<ThemeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DetailsProductsModalContent = styled.View<ThemeProps>`
  width: 95%;
  height: 80%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
