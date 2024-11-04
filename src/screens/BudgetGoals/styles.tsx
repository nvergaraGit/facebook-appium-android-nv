import styled from 'styled-components/native';
import { theme } from '@styles/themes';
import { TTheme } from 'types/theme';

interface ThemeProps {
  theme?: TTheme;
  selected?: boolean;
}

export const BudgetGoalsContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondary};
`;

export const BudgetGoalsContainerBody = styled.View`
  flex: 1;
  padding-horizontal: 17px;
  background-color: ${theme.colors.secondary};
`;

export const BudgetGoalsContainerText = styled.Text<ThemeProps>``;

export const BudgetGoalsHeaderContainer = styled.View<ThemeProps>`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 17px;
  justify-content: space-between;
`;

export const BudgetGoalsHeaderContainerText = styled.View<ThemeProps>``;

export const BudgetGoalsFilterButton = styled.TouchableOpacity<ThemeProps>`
  width: 85px;
  height: 36px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.dividerLine};
`;

export const BudgetGoalsFilterButtonText = styled.Text<ThemeProps>`
  margin-left: 2px;
  color: ${theme.colors.textFilterPresale};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const BudgetGoalsHeaderTitle = styled.Text<ThemeProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.authBorderInput};
  font-family: ${({ theme }) => theme.fonts.GothamMedium};
`;

export const BudgetGoalsHeaderSubTitle = styled.Text<ThemeProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const BudgetGoalsHeaderSubTitleCardComparison = styled.Text<ThemeProps>`
  font-size: 16px;
  margin-vertical: 10px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.GothamBold};
`;

export const BudgetGoalsContainerTabs = styled.View<ThemeProps>`
  margin-top: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.borderTabReview};
`;

export const BudgetGoalsTabButton = styled.TouchableOpacity<ThemeProps>`
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom-width: ${({ selected }) => (selected ? '5px' : '0px')};
  border-bottom-color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryNav : theme.colors.secondary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.backgroundSelected : theme.colors.secondary};
`;

export const BudgetGoalsTextTabButton = styled.Text<ThemeProps>`
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  color: ${({ theme, selected }) => (selected ? theme.colors.primaryNav : theme.colors.black)};
`;
