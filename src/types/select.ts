import { FilterType } from '@libraries/constants';

export type TSelect = {
  id: string;
  placeholder: string;
  options: TOption[];
  filterType: FilterType;
};
export type TOption = {
  value: string;
  label: string;
};
