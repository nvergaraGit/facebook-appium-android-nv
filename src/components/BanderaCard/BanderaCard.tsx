import { getImageForSalesFloor } from '@utils/imageSalesFloor';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Cadena } from 'types/catalogs';

interface Props {
  catalogs: Cadena;
  handleDetails: (nombre: string) => void;
}

const BanderaCard = ({ catalogs, handleDetails }: Props) => {
  if (catalogs.nombre !== 'SMK2 LOCALES') {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>{getImageForSalesFloor(catalogs.nombre)}</View>
        <FlatList
          data={catalogs.banderas}
          keyExtractor={(item, index) => `${item.nombre}-${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              disabled={!item.tieneCatalogo}
              onPress={() => handleDetails(item.nombre)}
              style={[
                styles.cardItem,
                !item.tieneCatalogo && {
                  backgroundColor: 'rgba(204, 216, 229, 0.5)',
                  borderWidth: 0,
                },
              ]}
            >
              <View style={styles.imageContainer}>
                {getImageForSalesFloor(item.nombre)}
                {!item.tieneCatalogo && <View style={styles.overlay} />}
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  } else {
    return null;
  }
};
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    backgroundColor: '#F7F9FC',
    paddingTop: 9,
    paddingBottom: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImageContainer: {
    marginBottom: 5,
  },
  cardItem: {
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(204, 216, 229, 0.5)',
    borderRadius: 8,
  },
});

export default BanderaCard;
