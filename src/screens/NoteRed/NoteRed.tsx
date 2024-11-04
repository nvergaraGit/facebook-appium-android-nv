import { TRedNoteMonth, TRedNoteMonthData } from 'types/salesFloors';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import getRedNoteMonth from '@graphql/queries/getRedNoteMonth';
import DetailsNoteRed from '@components/DetailsNoteRed/DetailsNoteRed';
import { StackScreenProps } from '@react-navigation/stack';
import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import WithApollo from '@components/hocs/WithApollo';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import FooterAbsolute from '@shared/FooterAbsolute/FooterAbsolute';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
type Props = StackScreenProps<SalesFloorsDetailsStack, 'NoteRed', 'DetailsNoteRed'>;
const NoteRed = ({ route }: Props) => {
  const { salesFloor } = route.params;
  const navigation = useNavigation();
  const [noteRed, setNoteRed] = useState<TRedNoteMonth | null>(null);

  const [redNoteQuery, { loading }] = useLazyQuery(getRedNoteMonth, {
    onCompleted: (result: TRedNoteMonthData) => {
      setNoteRed(result.getRedNoteMonth.data);
    },
  });

  useEffect(() => {
    void redNoteQuery({
      variables: {
        date: moment().format('YYYY-MM-DD'),
        codClient: salesFloor.codClient.toString(),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderDetailScreenNavigation title="Detalle de NotaRED" goBack={() => navigation.goBack()} />
      {!loading ? (
        <ScrollView
          style={{ flex: 1, paddingLeft: 20, paddingRight: 40, backgroundColor: 'white' }}
        >
          <DetailsNoteRed noteRedMonth={noteRed} />
        </ScrollView>
      ) : (
        <FooterAbsolute loader={loading} />
      )}
    </>
  );
};

export default WithApollo(NoteRed);
