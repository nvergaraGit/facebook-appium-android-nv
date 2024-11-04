import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Category, Format, TFormato } from 'types/catalogs';
import {
  ContainerCategory,
  TitleCategory,
  TitleMecanica,
  TitlePacking,
  TitlePatron,
  TagPatron,
} from './Styles';

import { getImageForCategoryOC } from '@utils/getCategoriesOc';
interface Props {
  packing: Category;
  handleDetails: (packing: Format, format: TFormato, category: string) => void;
}
export const CardPacking = ({ packing, handleDetails }: Props) => {
  const comparePatron = (a: Format, b: Format) => {
    const patronA = a.data && a.data.length > 0 ? a.data[0].patron : '';
    const patronB = b.data && b.data.length > 0 ? b.data[0].patron : '';

    if (patronA === 'PRIMARIO') return -1;
    if (patronB === 'PRIMARIO') return 1;
    if (patronA === 'SECUNDARIO' && patronB !== 'PRIMARIO') return -1;
    if (patronB === 'SECUNDARIO' && patronA !== 'PRIMARIO') return 1;
    return 0;
  };
  return (
    <View>
      {packing.categoria !== 'ALCOHOLES' && (
        <ContainerCategory category={packing.categoria}>
          {getImageForCategoryOC(packing.categoria)}
          <TitleCategory category={packing.categoria}>{packing.categoria}</TitleCategory>
        </ContainerCategory>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={packing.formatos.map((item) => item).sort(comparePatron)}
          numColumns={3}
          style={{ marginHorizontal: 4 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flex: 1,
                margin: 8,
                borderRadius: 6,
                paddingVertical: 10,
                backgroundColor: '#F7F9FC',
                borderWidth: 1,
                borderColor: '#E6ECF4',
                justifyContent: 'center',
                minWidth: 108,
                minHeight: 86,
                alignItems: 'center',
              }}
              onPress={() => handleDetails(item.data[0], item, packing.categoria)}
            >
              <TitlePacking>{item.formato}</TitlePacking>
              {item.data && item.data.length > 0 && (
                <View>
                  {item.data[0].patron && (
                    <TagPatron category={item.data[0].patron}>
                      <TitlePatron category={item.data[0].patron}>
                        {item.data[0].patron}
                      </TitlePatron>
                    </TagPatron>
                  )}
                  <TitleMecanica>{item.data[0].mecanica}</TitleMecanica>
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};
