import JumboIcon from '@assets/icons/00001.svg';
import SantaIsabelIcon from '@assets/icons/00002.svg';
import AcuentaIcon from '@assets/icons/00003.svg';
import LiderExpressIcon from '@assets/icons/00006.svg';
import HiperLiderIcon from '@assets/icons/00007.svg';
import TotusIcon from '@assets/icons/00008.svg';
import Totus from '@assets/icons/tottus.svg';
import UnimarcIcon from '@assets/icons/00010.svg';
import LilyIcon from '@assets/icons/00033.svg';
import CenterMarketIcon from '@assets/icons/00036.svg';
import EltitIcon from '@assets/icons/00055.svg';
import ColchaguinaIcon from '@assets/icons/00075.svg';
import ColericaIcon from '@assets/icons/00076.svg';
import FamaIcon from '@assets/icons/00077.svg';
import MontserratIcon from '@assets/icons/00093.svg';
import NueveIcon from '@assets/icons/00097.svg';
import OhigginsIcon from '@assets/icons/00099.svg';
import TrebolIcon from '@assets/icons/00137.svg';
import VersluysIcon from '@assets/icons/00141.svg';
import OkMarketIcon from '@assets/icons/00148.svg';
import ProviMarketIcon from '@assets/icons/00220.svg';
import PlusUltraIcon from '@assets/icons/00232.svg';
import SuperGangaIcon from '@assets/icons/00237.svg';
import CentralMayoristaIcon from '@assets/icons/00243.svg';
import KugatIcon from '@assets/icons/00245.svg';
import Super8Icon from '@assets/icons/00246.svg';
import ReyOrmeñoIcon from '@assets/icons/00265.svg';
import PedidosYaIcon from '@assets/icons/00267.svg';
import AlviIcon from '@assets/icons/alvi.svg';
import Mayorista from '@assets/icons/mayorista.svg';
import Walmart from '@assets/icons/walmart.svg';
import Cencosud from '@assets/icons/cencosud.svg';
import Smu from '@assets/icons/smu.svg';
import SalesFloorDummy from '@assets/icons/salesfloor-dummy.svg';
import React from 'react';

export const getImageForSalesFloor = (salesFloor: string) => {
  switch (salesFloor) {
    case '00001':
      return <JumboIcon />;
    case 'JUMBO':
      return <JumboIcon />;
    case '00002':
      return <SantaIsabelIcon />;
    case 'SANTA ISABEL':
      return <SantaIsabelIcon />;
    case '00003':
      return <AcuentaIcon />;
    case 'ACUENTA':
      return <AcuentaIcon />;
    case '00006':
      return <LiderExpressIcon />;
    case 'LIDER EXPRESS':
      return <LiderExpressIcon />;
    case '00007':
      return <HiperLiderIcon />;
    case 'LIDER HIPER':
      return <HiperLiderIcon />;
    case '00008':
      return <TotusIcon />;
    case 'TOTTUS':
      return <Totus />;
    case '00010':
      return <UnimarcIcon />;
    case 'UNIMARC':
      return <UnimarcIcon />;
    case '00033':
      return <LilyIcon />;
    case '00036':
      return <CenterMarketIcon />;
    case '00055':
      return <EltitIcon />;
    case 'ELTIT':
      return <EltitIcon />;
    case '00075':
      return <ColchaguinaIcon />;
    case '00076':
      return <ColericaIcon />;
    case '00077':
      return <FamaIcon />;
    case 'LA FAMA':
      return <FamaIcon />;
    case 'WALMART':
      return <Walmart />;
    case 'CENCOSUD':
      return <Cencosud />;
    case 'SMU':
      return <Smu />;
    case '00093':
      return <MontserratIcon />;
    case '00097':
      return <NueveIcon />;
    case 'NUEVE':
      return <NueveIcon />;
    case 'ALVI':
      return <AlviIcon />;
    case '00099':
      return <OhigginsIcon />;
    case '00137':
      return <TrebolIcon />;
    case 'TREBOL':
      return <TrebolIcon />;
    case '00141':
      return <VersluysIcon />;
    case '00148':
      return <OkMarketIcon />;
    case 'OK MARKET':
      return <OkMarketIcon />;
    case '00220':
      return <ProviMarketIcon width={55} />;
    case '00232':
      return <PlusUltraIcon />;
    case 'PLUS ULTRA':
      return <PlusUltraIcon />;
    case '00237':
      return <SuperGangaIcon />;
    case 'SUPER GANGA':
      return <SuperGangaIcon />;
    case '00243':
      return <CentralMayoristaIcon />;
    case 'CENTRAL MAYORISTA DE V.':
      return <CentralMayoristaIcon />;
    case '00245':
      return <KugatIcon />;
    case 'CUGAT':
      return <KugatIcon />;
    case 'M10':
      return <Mayorista />;
    case '00246':
      return <Super8Icon />;
    case '00265':
      return <ReyOrmeñoIcon />;
    case 'EL REY ORMEÃ‘O':
      return <ReyOrmeñoIcon />;
    case '00267':
      return <PedidosYaIcon />;
    default:
      return <SalesFloorDummy />;
  }
};
