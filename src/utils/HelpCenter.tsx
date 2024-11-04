import React from 'react';
import IconVideos from '@assets/icons/icon-videos.svg';
import IconDocuments from '@assets/icons/icon-documents.svg';
import { THelpCenterCategories } from 'types/helpCenter';

export const HelpCenterCategories: THelpCenterCategories = [
  {
    image: <IconVideos />,
    title: 'Vídeos',
    typeFile: 'videos',
    qty: 0,
  },
  {
    image: <IconDocuments />,
    title: 'Documentos',
    typeFile: 'documents',
    qty: 0,
  },
];
