import styled from 'styled-components/native';
import { Text } from 'react-native';
import { TTheme } from 'types/theme';
import { Svg, Path } from 'react-native-svg';
import React from 'react';
interface TabsProps {
  theme?: TTheme;
  focused?: boolean;
}

const generateIconStyles = (width: string, height: string) => `
  width: ${width};
  height: ${height};
`;

export const ContainerItem = styled.View<TabsProps>`
  display: flex;
  align-items: center;
`;

export const TabText = styled(Text)<TabsProps>`
  font-family: ${(props) => props.theme.fonts.mainFont};
  font-size: 12px;
  margin-top: 5px;
  line-height: 16px;
  color: ${(props) => (props.focused ? props.theme.colors.primaryNav : props.theme.colors.dark)};
`;

const HomeIcon = styled(Svg)`
  ${generateIconStyles('24px', '24px')}
`;

export const StyledHomeIcon = ({ focused }: TabsProps) => (
  <HomeIcon>
    <Path
      d="M2.38606 8.64388L11.3861 1.64388C11.7472 1.36301 12.2528 1.36301 12.6139 1.64388L21.6139 8.64388C21.8575 8.83333 22 9.12464 22 9.43323V20.4332C22 22.0901 20.6569 23.4332 19 23.4332H5C3.34315 23.4332 2 22.0901 2 20.4332V9.43323C2 9.12464 2.14247 8.83333 2.38606 8.64388ZM20 9.92222L12 3.69922L4 9.92122V20.4332C4 20.9461 4.38604 21.3687 4.88338 21.4265L5 21.4332H19C19.5523 21.4332 20 20.9855 20 20.4332V9.92222Z"
      fill={focused ? '#F40009' : '#5F6F86'}
    />
    <Path
      d="M15 11.4332C15.5128 11.4332 15.9355 11.8193 15.9933 12.3166L16 12.4332V22.4332C16 22.9855 15.5523 23.4332 15 23.4332C14.4872 23.4332 14.0645 23.0472 14.0067 22.5498L14 22.4332V13.4332H10V22.4332C10 22.9461 9.61396 23.3687 9.11662 23.4265L9 23.4332C8.48716 23.4332 8.06449 23.0472 8.00673 22.5498L8 22.4332V12.4332C8 11.9204 8.38604 11.4977 8.88338 11.44L9 11.4332H15Z"
      fill={focused ? '#F40009' : '#5F6F86'}
    />
  </HomeIcon>
);
