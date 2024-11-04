import { styled } from 'styled-components/native';
import { TTheme } from 'types/theme';
import ArrowRight from '@assets/icons/icon-right-arrow.svg';

interface ThemeProps {
  theme?: TTheme;
}

export const BtnOption = styled.TouchableOpacity<ThemeProps>`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  justify-content: space-between;
`;

export const ContainerIconText = styled.View<ThemeProps>`
  flex-direction: row;
  align-items: center;
`;

export const BtnArrowRight = styled(ArrowRight)<ThemeProps>`
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
`;
