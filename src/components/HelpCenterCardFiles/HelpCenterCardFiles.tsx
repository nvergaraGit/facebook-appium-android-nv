import React from 'react';
import IconArrow from '@assets/icons/arrow-right.svg';
import {
  HelpCenterCardFilesContainer,
  HelpCenterCardFilesTextIcon,
  HelpCenterCardText,
  HelpCenterQty,
  HelpCenterQtyText,
} from './style';

interface Props {
  title: string;
  typeFile: string;
  firstElement?: number;
  time?: string;
  url: string;
  selectFiles: ((type: string, url: string) => void | Promise<void>) | undefined;
}

const HelpCenterCardFiles = ({
  title,
  typeFile,
  firstElement,
  time = '00:00',
  url,
  selectFiles,
}: Props) => {
  return (
    <HelpCenterCardFilesContainer
      first={firstElement === 0}
      onPress={() => selectFiles && selectFiles(typeFile, url)}
    >
      <HelpCenterCardFilesTextIcon>
        <HelpCenterCardText>{title}</HelpCenterCardText>
      </HelpCenterCardFilesTextIcon>
      <HelpCenterQty>
        {typeFile === 'videos' && <HelpCenterQtyText>{time} minutos</HelpCenterQtyText>}
        <IconArrow />
      </HelpCenterQty>
    </HelpCenterCardFilesContainer>
  );
};

export default HelpCenterCardFiles;
