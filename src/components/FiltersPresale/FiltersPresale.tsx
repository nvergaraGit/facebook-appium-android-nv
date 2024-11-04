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
  selectorComparison: TSelect[];
  getOptions: (select: TSelect, options: TOption[]) => void;
  selectedLabel: { [key: string]: string };
  onPressFilter: () => void;
  refreshFilter?: () => void;
  showRefreshFilter?: boolean;
}

function FiltersPresale({
  isVisible,
  setIsVisible,
  selectors,
  selectorComparison,
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
          <Title>Filtrar</Title>
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
      </ContainerFilters>
      <ContainerFilters>
        <ContainerTitleRefresh filterRefresh={showRefreshFilter}>
          <Title>Comparar</Title>
          {showRefreshFilter && (
            <ContainerRefresh onPress={refreshFilter}>
              <ArrowReturn />
              <TitleRefresh>Limpiar filtros</TitleRefresh>
            </ContainerRefresh>
          )}
        </ContainerTitleRefresh>
        {selectorComparison.map((select) => (
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
        <ButtonSession title="Aplicar ajustes" isShowMsg onPress={onPressFilter} isIcon />
      </ContainerFilters>
    </BottomSheetModal>
  );
}

export default FiltersPresale;
