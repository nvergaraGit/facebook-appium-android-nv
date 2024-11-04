/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/unbound-method */
import React, { useState, useEffect } from 'react';
import WithApollo from '@components/hocs/WithApollo';
import Header from '@components/Header/Header';
import { useAppContext } from '@context/state';
import { useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { TOption, TSelect } from 'types/select';
import {
  BudgetGoalsContainer,
  BudgetGoalsTabButton,
  BudgetGoalsHeaderTitle,
  BudgetGoalsFilterButton,
  BudgetGoalsTextTabButton,
  BudgetGoalsContainerTabs,
  BudgetGoalsContainerBody,
  BudgetGoalsHeaderSubTitle,
  BudgetGoalsHeaderContainer,
  BudgetGoalsFilterButtonText,
  BudgetGoalsHeaderContainerText,
  BudgetGoalsHeaderSubTitleCardComparison,
} from './styles';
import { FilterType } from '@libraries/constants';
import FilterIcon from '@assets/icons/filter.svg';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Filters from '@components/FiltersPresale/FiltersPresale';
import DetailsFilter from '@components/DetailsFilter/DetailsFilter';
import PresaleGraphics from '@components/PresaleGraphics/PresaleGraphics';
import PresaleGraphicsComparation from '@components/PresaleGraphicsComparation/PresaleGraphicsComparation';
import { View, Text } from 'react-native';

interface GraphicsData {
  category: string;
  executive: {
    title: string;
    progress: number;
    advanced: number;
    goals: number;
  }[];
}

interface DataItem {
  id: number;
  headerText?: string;
  titleText?: string;
  fill?: number;
  barProgress?: number;
  barText1?: string;
  barText2?: string;
  titleText1?: string;
  titleText2?: string;
  fillgeneral?: number;
  fill1?: number;
  fill2?: number;
  barProgressGeneral?: number;
  barProgress1?: number;
  barProgress2?: number;
  barText3?: string;
  barText4?: string;
}

const BudgetGoals = () => {
  const [tabSelect, setTabSelect] = useState<number>(1);
  const [selectors, setSelectors] = useState<TSelect[]>([
    {
      id: '1',
      placeholder: 'Tipo de escala',
      options: [
        { label: 'Diario', value: '1' },
        { label: 'Mensual', value: '2' },
      ],
      filterType: FilterType.DEFAULT,
    },
    {
      id: '2',
      placeholder: 'Mi Sucursal',
      options: [
        { label: 'Todos', value: '1' },
        { label: 'Chillán', value: '2' },
        { label: 'Villa del mar', value: '3' },
      ],
      filterType: FilterType.DEFAULT,
    },
  ]);
  const [selectorsComparison, setSelectorsComparison] = useState<TSelect[]>([
    {
      id: '1',
      placeholder: 'Ejecutivo a comparar',
      options: [
        { label: 'Ninguno', value: '1' },
        { label: 'Christian Gonzalez', value: '2' },
        { label: 'Marco Hidalgo', value: '3' },
        { label: 'Diana Cortes', value: '4' },
        { label: 'Maximiliano Iturra', value: '5' },
        { label: 'Alexis Rivas', value: '6' },
      ],
      filterType: FilterType.DEFAULT,
    },
    {
      id: '2',
      placeholder: 'Sucursal del ejecutivo',
      options: [
        { label: 'Todos', value: '1' },
        { label: 'Talca', value: '2' },
        { label: 'Concepción', value: '3' },
        { label: 'Curicó', value: '4' },
      ],
      filterType: FilterType.DEFAULT,
    },
  ]);

  const dataComparison: GraphicsData[] = [
    {
      category: 'Todos',
      executive: [
        { title: 'Christian M.', progress: 70, advanced: 2.7, goals: 3.5 },
        { title: 'Marcos H', progress: 85, advanced: 2.7, goals: 3.5 },
      ],
    },
    {
      category: 'SSD',
      executive: [
        { title: 'Christian M.', progress: 70, advanced: 2.7, goals: 3.5 },
        { title: 'Marcos H', progress: 85, advanced: 2.7, goals: 3.5 },
      ],
    },
    {
      category: 'Still',
      executive: [
        { title: 'Christian M.', progress: 70, advanced: 2.7, goals: 3.5 },
        { title: 'Marcos H', progress: 85, advanced: 2.7, goals: 3.5 },
      ],
    },
  ];

  const data = [
    {
      id: 1,
      headerText: 'Total',
      titleText: 'Cumplimiento',
      fill: 70,
      barProgress: 0.7,
      barText1: 'Avance: CU 21.254',
      barText2: 'Meta: CU 21.254',
    },
    {
      id: 2,
      headerText: 'Total',
      titleText: 'Cumplimiento',
      fill: 50,
      barProgress: 0.5,
      barText1: 'Avance: CU 21.254',
      barText2: 'Meta: CU 21.254',
    },
    {
      id: 3,
      headerText: 'Total',
      titleText: 'Cumplimiento',
      fill: 80,
      barProgress: 0.3,
      barText1: 'Avance: CU 21.254',
      barText2: 'Meta: CU 21.254',
    },
    {
      id: 4,
      headerText: 'Still',
      titleText1: 'Agua',
      titleText2: 'NCBS',
      fillgeneral: 70,
      fill1: 70,
      fill2: 70,
      barProgressGeneral: 0.7,
      barProgress1: 0.7,
      barProgress2: 0.7,
      barText1: 'CU 21.254',
      barText2: 'CU 21.254',
      barText3: 'CU 21.254',
      barText4: 'CU 21.254',
    },
  ];

  const [titleFilter, setTitleFilter] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [optionsFilter, setOptionsFilter] = useState<TOption[]>([]);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabels] = useState<{ [key: string]: string }>({});
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({});

  const selectOptions = (option: number) => {
    setTabSelect(option);
  };
  const { setModalInternetConnection, isInternet } = useAppContext();

  const getOptions = (select: TSelect, options: TOption[]) => {
    setTitleFilter(select.placeholder);
    setShowOptions(true);
    setOptionsFilter(options);
  };

  useEffect(() => {
    if (!isInternet) {
      setModalInternetConnection(true);
      return;
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps*/
  }, []);

  const filterAdvanced = () => {
    setIsVisible(false);
    setShowComparison(true);
  };

  const onFilterRefresh = () => {
    setSelectedValues({});
    setSelectedLabels({});
  };

  const handleSelectChange = (selectId: string, newValue: string, newLabel: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [selectId]: newValue,
    }));
    setSelectedLabels((prevLabels) => ({
      ...prevLabels,
      [selectId]: newLabel,
    }));
  };

  return (
    <>
      {!showOptions ? (
        <BudgetGoalsContainer>
          <Header title="Presupuesto y metas" />
          <Filters
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            selectors={selectors}
            selectorComparison={selectorsComparison}
            getOptions={getOptions}
            selectedLabel={selectedLabel}
            onPressFilter={filterAdvanced}
            refreshFilter={onFilterRefresh}
            showRefreshFilter
          />
          <BudgetGoalsHeaderContainer>
            <BudgetGoalsHeaderContainerText>
              <BudgetGoalsHeaderTitle>Sucursal</BudgetGoalsHeaderTitle>
              {!showComparison && <BudgetGoalsHeaderSubTitle>Todos</BudgetGoalsHeaderSubTitle>}
              {showComparison && (
                <BudgetGoalsHeaderSubTitle>Viña del mar - Concepción</BudgetGoalsHeaderSubTitle>
              )}
            </BudgetGoalsHeaderContainerText>
            <BudgetGoalsFilterButton onPress={() => setIsVisible(true)}>
              <FilterIcon />
              <BudgetGoalsFilterButtonText>Filtrar</BudgetGoalsFilterButtonText>
            </BudgetGoalsFilterButton>
          </BudgetGoalsHeaderContainer>
          <BudgetGoalsContainerBody>
            <BudgetGoalsContainerTabs>
              <BudgetGoalsTabButton selected={tabSelect === 1} onPress={() => selectOptions(1)}>
                <BudgetGoalsTextTabButton selected={tabSelect === 1}>
                  NARTD
                </BudgetGoalsTextTabButton>
              </BudgetGoalsTabButton>
              <BudgetGoalsTabButton selected={tabSelect === 2} onPress={() => selectOptions(2)}>
                <BudgetGoalsTextTabButton selected={tabSelect === 2}>ARTD</BudgetGoalsTextTabButton>
              </BudgetGoalsTabButton>
            </BudgetGoalsContainerTabs>
            {!showComparison && (
              <FlatList
                data={data}
                renderItem={({ item, index }) => <PresaleGraphics data={item} index={index} />}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
            {showComparison && (
              <FlatList
                data={dataComparison}
                renderItem={({ item, index }) => (
                  <>
                    <View>
                      <BudgetGoalsHeaderSubTitleCardComparison>
                        {item.category}
                      </BudgetGoalsHeaderSubTitleCardComparison>
                    </View>
                    <FlatList
                      data={item.executive}
                      renderItem={({ item }) => (
                        <PresaleGraphicsComparation
                          title={item.title}
                          progress={item.progress}
                          advanced={item.advanced}
                          goals={item.goals}
                          index={index}
                        />
                      )}
                      keyExtractor={(item, index) => index.toString()}
                      numColumns={2}
                      columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                  </>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
            {/* {loadingBranch && (
                    <ContainerLoader>
                        <LoaderView>
                            <Loader />
                        </LoaderView>
                    </ContainerLoader>
                )} */}
          </BudgetGoalsContainerBody>
        </BudgetGoalsContainer>
      ) : (
        <DetailsFilter
          placeHolder={titleFilter}
          options={optionsFilter}
          goBack={() => setShowOptions(false)}
          selectedValue={
            selectedValues[titleFilter]
              ? selectedValues[titleFilter]
              : optionsFilter.length
              ? optionsFilter[0].value
              : ''
          }
          onValueChange={(newValue, label) => handleSelectChange(titleFilter, newValue, label)}
        />
      )}
    </>
  );
};

export default WithApollo(BudgetGoals);
