import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { AboutContainer, AboutTitle, Label } from './styles';
import IconLeftArrow from '@assets/icons/icon-left-arrow.svg';
import { TOption } from 'types/select';
import { RadioButton } from 'react-native-paper';
import { FilterType } from '@libraries/constants';
import CalendarComponent from '@components/Calendar/Calendar';
import { ScrollView } from 'react-native-gesture-handler';
import SearchInput from '@components/SearchInput/SearchInput';
import LoaderFullScreen from '@shared/LoaderFullScreen/LoaderFullScreen';

interface Props {
  options: TOption[];
  placeHolder: string;
  goBack: () => void;
  selectedValue: string;
  onValueChange: (value: string, label: string) => void;
  filterType?: FilterType;
}
function DetailsFilter({
  options,
  placeHolder,
  goBack,
  selectedValue,
  onValueChange,
  filterType = FilterType.DEFAULT,
}: Props) {
  const [filter, setFilter] = useState<string>('');
  const [dataValues, setDataValues] = useState<TOption[]>(options);
  const [loading] = useState<boolean>(false);

  const handleChange = (text: string) => {
    setFilter(text);
    const filteredData = options.filter((item) => {
      return item.label.toLowerCase().includes(text.toLowerCase()) || item.value.includes(text);
    });
    setDataValues(filteredData);
  };

  const placeHolderFilter = `${
    placeHolder === 'Productos' ? 'Buscar un producto' : `Búsqueda de ${placeHolder.toLowerCase()}`
  }`;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AboutContainer>
        {loading && <LoaderFullScreen />}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
            marginLeft: 10,
          }}
          onPress={goBack}
        >
          <IconLeftArrow />
          {placeHolder === 'Inicio' || placeHolder === 'Termino' ? (
            <AboutTitle>Filtrar fecha de {placeHolder.toLowerCase()}</AboutTitle>
          ) : (
            <AboutTitle>Filtrar {placeHolder}</AboutTitle>
          )}
        </TouchableOpacity>
        {options.length > 10 && (
          <View style={{ marginBottom: 20 }}>
            <SearchInput
              placeholder={placeHolderFilter}
              value={filter}
              onSearch={(text) => handleChange(text)}
            />
          </View>
        )}
        {filterType === 'CALENDAR' ? (
          <CalendarComponent
            onValueChange={(value: string, label: string) => onValueChange(value, label)}
          />
        ) : (
          <ScrollView>
            {dataValues.map((option) => (
              <RadioButton.Group
                onValueChange={(newValue) => onValueChange(newValue, option.label)}
                value={selectedValue}
                key={option.value}
              >
                <TouchableOpacity onPress={() => onValueChange(option.value, option.label)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value={option.value} color="#F40009" />
                    <Label>{option.label}</Label>
                  </View>
                </TouchableOpacity>
              </RadioButton.Group>
            ))}
          </ScrollView>
        )}
      </AboutContainer>
    </>
  );
}

export default DetailsFilter;
