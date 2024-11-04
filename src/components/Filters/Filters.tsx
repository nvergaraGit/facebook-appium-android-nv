import IconArrow from '@assets/icons/icon-right-arrow.svg';
import BottomSheetModal from '@components/BottomSheetModal/BottomSheetModal';
import ButtonSession from '@components/ButtonSession/ButtonSession';
import React from 'react';
import { View } from 'react-native';
import { TOption, TSelect } from 'types/select';
import {
  ContainerFilters,
  ContainerSelect,
  TextValue,
  Title,
  TitleLabel,
  ContainerTitleRefresh,
  ContainerRefresh,
  TitleRefresh,
} from './styles';
import ArrowReturn from '@assets/icons/arrow-return.svg';

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  selectors: TSelect[];
  getOptions: (select: TSelect, options: TOption[]) => void;
  selectedLabel: { [key: string]: string };
  onPressFilter: () => void;
  refreshFilter?: () => void;
  showRefreshFilter?: boolean;
}

function Filters({
  isVisible,
  setIsVisible,
  selectors,
  getOptions,
  selectedLabel,
  onPressFilter,
  refreshFilter,
  showRefreshFilter = false,
}: Props) {
  return (
    <BottomSheetModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <ContainerFilters>
        <ContainerTitleRefresh filterRefresh={showRefreshFilter}>
          <Title>Filtrar por</Title>
          {showRefreshFilter && (
            <ContainerRefresh onPress={refreshFilter}>
              <ArrowReturn />
              <TitleRefresh>Limpiar filtros</TitleRefresh>
            </ContainerRefresh>
          )}
        </ContainerTitleRefresh>
        {selectors.map((select) => (
          <ContainerSelect onPress={() => getOptions(select, select.options)} key={select.id}>
            <TitleLabel>{select.placeholder}</TitleLabel>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextValue>
                {selectedLabel[select.placeholder] != undefined
                  ? selectedLabel[select.placeholder]
                  : select.options[0]?.label}
              </TextValue>
              <IconArrow />
            </View>
          </ContainerSelect>
        ))}
        <ButtonSession title="Aplicar filtros" isShowMsg onPress={onPressFilter} isIcon />
      </ContainerFilters>
    </BottomSheetModal>
  );
}

export default Filters;
