import { useState } from 'react';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import {
  ANALITICS_ACTION_TRACKING,
  ANALITICS_ACTION_TRACKING_REPORT_GENERAL,
} from '@libraries/constants';
import { fileDownloader } from '@utils/fileDownloader';
import { useAppContext } from '@context/state';
import { GRAPHQL_BACKEND_URL } from '@env';

type DownloadTrackingPDFFileParams = {
  queries: Record<string | number, string | number>;
  fileName: string;
};

type UseTrackingPDFDownloadReturnType = {
  loading: boolean;
  downloadTrackingPDFFile: (params: DownloadTrackingPDFFileParams) => void;
};

export const useTrackingPDFDownload = (): UseTrackingPDFDownloadReturnType => {
  const [loading, setLoading] = useState(false);
  const { auth } = useAppContext();

  const downloadTrackingPDFFile = (params: DownloadTrackingPDFFileParams) => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_ACTION_TRACKING,
      ANALITICS_ACTION_TRACKING_REPORT_GENERAL,
      auth,
    );
    const urlBackend = GRAPHQL_BACKEND_URL;
    const urlDomain = urlBackend?.split('/graphql')[0];
    let queries = '';
    Object.keys(params.queries).forEach((key) => {
      queries = `${queries}${queries.length ? '&' : ''}${key}=${params.queries[key]}`;
    });
    if (!queries.length) {
      return;
    }
    const urlDownload = `${urlDomain}/product/tracking-report?${queries}`;
    setLoading(true);
    void fileDownloader(urlDownload, params.fileName).then(() => {
      setLoading(false);
    });
  };

  return {
    loading,
    downloadTrackingPDFFile,
  };
};
