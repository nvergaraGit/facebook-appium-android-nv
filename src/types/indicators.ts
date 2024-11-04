export type TSalesMobile = {
  movil: TMobile;
  acumulado: TAcumulado;
  fechasMovilVentas: FechasMovilVentas;
  movilPromedio: string;
};
export type TMobile = {
  actual: string;
  aa: string;
  porcentaje: string;
};
export type TAcumulado = {
  actual: string;
  aa: string;
  porcentaje: string;
};
export type TDataIndicator = {
  getSalesMobile: {
    data: {
      movil: TMobile;
      acumulado: TAcumulado;
      fechasMovilVentas: FechasMovilVentas;
      movilPromedio: string;
    };
  };
};

export type TIndicatorCurrent = {
  mes: string | undefined;
  mesAnterior: string;
  porcentaje: string;
};

export type TIndicatorAcumulado = {
  acumuladoActual: string;
  acumuladoAnterior: string;
  porcentaje: string;
};

export type TIndicatorsData = {
  getIndicators: {
    data: {
      actual: TIndicatorCurrent;
      fechasIndicadores: TFechasIndicadores;
      acumulado: TIndicatorAcumulado;
    };
  };
};

export type OptionItem = {
  id: number;
  option: string;
};

export type TDataOptionsByIndicator = {
  getOptionsByIndicator: {
    data: OptionItem[];
  };
};

export type OptionItemFilter = {
  label: string;
  value: string;
};

export type FechasMovilVentas = {
  acumuladoAaInicio: string;
  acumuladoAaTermino: string;
  acumuladoActualInicio: string;
  acumuladoActualTermino: string;
  movilAaInicio: string;
  movilAaTermino: string;
  movilActualInicio: string;
  movilActualTermino: string;
};
export type TFechasIndicadores = {
  actualAaInicio: string;
  actualAaTermino: string;
  actualMesInicio: string;
  actualMesTermino: string;
  acumuladoAaInicio: string;
  acumuladoAaTermino: string;
  acumuladoActualInicio: string;
  acumuladoActualTermino: string;
};
