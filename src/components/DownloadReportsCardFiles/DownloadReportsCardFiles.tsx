import React from 'react';
import IconDownloadReport from '@assets/icons/download-report-icon.svg';
import {
  DownloadReportsCardFilesContainer,
  DownloadReportsCardFilesTextIcon,
  DownloadReportsCardFilesText,
  DownloadReportsCardFilesQty,
} from './style';

interface Props {
  title: string;
  id: number;
  selectFiles: ((id: number) => void | Promise<void>) | undefined;
}

const DownloadReportsCardFiles = ({ title, id, selectFiles }: Props) => {
  return (
    <DownloadReportsCardFilesContainer onPress={() => selectFiles && selectFiles(id)}>
      <DownloadReportsCardFilesTextIcon>
        <DownloadReportsCardFilesText>{title}</DownloadReportsCardFilesText>
      </DownloadReportsCardFilesTextIcon>
      <DownloadReportsCardFilesQty>
        <IconDownloadReport />
      </DownloadReportsCardFilesQty>
    </DownloadReportsCardFilesContainer>
  );
};

export default DownloadReportsCardFiles;
