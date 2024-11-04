import { TTheme } from 'types/theme';
import { styled } from 'styled-components/native';

interface ThemeProps {
  theme?: TTheme;
}

export const CatalogRoomListContainer = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const CatalogRoomContent = styled.View<ThemeProps>`
  padding: 0px 24px;
  flex: 1;
`;

export const CatalogRoomDescription = styled.Text<ThemeProps>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 14px;
  line-height: 16px;
`;

export const CatalogRoomFlatListContainer = styled.View<ThemeProps>`
  padding: 14px 0 0 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const CatalogRoomBottonContainer = styled.View<ThemeProps & { showTopDivider?: boolean }>`
  border-top-color: ${({ showTopDivider, theme }) =>
    showTopDivider ? theme.colors.productsCardDivisorLine : 'transparent'};
  border-top-width: 1px;
  border-style: solid;
  padding: 16px 24px;
`;

export const CatalogButtonActionsContainer = styled.View<ThemeProps>`
  height: 20%;
  justify-content: flex-end;
`;
