/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { SalesFloorsDetailsStack } from '@navigation/salesFloorNavigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { ContainerPage } from '@screens/DetailsNoteRed/DetailsNoteRed.styles';
import HeaderDetailScreenNavigation from '@shared/HeaderDetailTittle';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import React, { useEffect } from 'react';
import { StatusBar, TouchableWithoutFeedback } from 'react-native';
import { ContainerPageIndicator } from './Styles';
import {
  Container,
  ContainerTitles,
  ContainerTotal,
  IconContainer,
  ProductsCardButton,
  TitleOrders,
} from '@screens/DetailsSalesFloor/styles';
import IconReview from '@assets/icons/icon-review.svg';
import { useAppContext } from '@context/state';
import {
  ANALITICS_ACTION_SALES_FLOOR_FILLRATE,
  ANALITICS_CATEGORY_SALES_FLOOR,
} from '@libraries/constants';
import WithApollo from '@components/hocs/WithApollo';
import { registerFirebaseAnaliticsEvent } from '@utils/Analitics';
import { TSalesFloor } from 'types/salesFloors';
import { useGetCustomerSummaryInfoLazyQuery } from '@graphql/types';
import dayjs from 'dayjs';

type Props = StackScreenProps<SalesFloorsDetailsStack, 'SalesFloorVisit'>;
const SaleFloorVisitStart = ({ route }: Props) => {
  const { salesFloor } = route.params;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { auth } = useAppContext();
  const navigation = useNavigation<StackNavigationProp<SalesFloorsDetailsStack>>();
  const [getCustomerInfoQuery, { data: trackingCustomerData }] =
    useGetCustomerSummaryInfoLazyQuery();
  const totalCatalogs = trackingCustomerData?.getCustomerSummaryInfo.totalCatalogs || 0;

  const goToReviewVisit = () => {
    registerFirebaseAnaliticsEvent(
      ANALITICS_CATEGORY_SALES_FLOOR,
      ANALITICS_ACTION_SALES_FLOOR_FILLRATE,
      auth,
    );
    if (totalCatalogs === 0) {
      navigation.navigate('SalesFloorReviewCatalogsExhibitions', {
        salesFloor: salesFloor as unknown as TSalesFloor,
      });
    }

    if (totalCatalogs > 0) {
      navigation.navigate('CatalogRoomList', {
        salesFloor: salesFloor as unknown as TSalesFloor,
      });
    }
  };

  useEffect(() => {
    if (salesFloor.codClient) {
      void getCustomerInfoQuery({
        variables: {
          customerInput: {
            date: dayjs().format('YYYYMMDD'),
            codClient: salesFloor.codClient.toString(),
          },
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salesFloor]);

  return (
    <ContainerPageIndicator>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HeaderDetailScreenNavigation
        title="Visita de la sala"
        goBack={() => navigation.navigate('Details', { salesFloor })}
      />

      <ContainerPage>
        <TouchableWithoutFeedback onPress={() => goToReviewVisit()}>
          <Container>
            <IconContainer>
              <IconReview />
              <ContainerTitles>
                <TitleOrders isImportant>Revisión catálogo y exhibiciones</TitleOrders>
              </ContainerTitles>
            </IconContainer>
            <ContainerTotal>
              <ProductsCardButton onPress={() => goToReviewVisit()}>
                <IconRightArrow />
              </ProductsCardButton>
            </ContainerTotal>
          </Container>
        </TouchableWithoutFeedback>
      </ContainerPage>
    </ContainerPageIndicator>
  );
};

export default WithApollo(SaleFloorVisitStart);
