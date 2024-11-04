import { styled } from 'styled-components/native';
import { TTheme } from '../../types/theme';

type TagContainerProps = { theme: TTheme } & { bgColor: string; borderColor?: string };
type TagTextProps = { theme: TTheme } & { color: string };

export const TagContainer = styled.View<TagContainerProps>`
  border-radius: 5px;
  overflow: hidden;
  width: 80px;
  padding: 4px 6px;
  align-items: center;
  background: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor || props.bgColor};
`;

export const TagText = styled.Text<TagTextProps>`
  font-family: ${({ theme }) => theme.fonts.GothamBold};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${({ color }) => color};
`;
