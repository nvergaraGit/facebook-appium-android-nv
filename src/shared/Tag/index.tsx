import React from 'react';
import { TagContainer, TagText } from './styles';

type TagProps = {
  value: string;
  bgColor: string;
  borderColor?: string;
  color: string;
};

const Tag: React.FC<TagProps> = ({ value, bgColor, borderColor, color }) => (
  <TagContainer bgColor={bgColor} borderColor={borderColor}>
    <TagText color={color}>{value}</TagText>
  </TagContainer>
);

export default Tag;
