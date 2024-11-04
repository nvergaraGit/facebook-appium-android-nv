import { View } from 'react-native';
import React from 'react';
import {
  ListDivider,
  TextTitleGothamMediumBlack,
  TextTitleGothamMediumDark,
} from '@styles/sharedStyles';
import {
  PercentageDateContainer,
  TextTitleWeek,
  TouchableContainer,
  WeekContainer,
} from './styles';
import { BtnArrowRight } from '@components/CatalogsListCard/styles';
import { WeeklyInfo } from 'types/fillRate';
import { dateFormatter } from '@utils/formatDate';

interface Properties {
  params: {
    item: WeeklyInfo;
  };
  onNext: (item: WeeklyInfo) => void;
  itemData: WeeklyInfo[];
  itemQty: number;
}

const FillRateWeeklyListCard = (props: Properties) => {
  const { onNext, params, itemData, itemQty } = props;
  const { item: data } = params;
  return (
    <View>
      <View>
        <ListDivider />
        <TouchableContainer onPress={() => onNext(data)}>
          <WeekContainer>
            <TextTitleWeek>{data.week}</TextTitleWeek>
          </WeekContainer>
          <PercentageDateContainer>
            <View>
              <TextTitleGothamMediumDark>
                {Math.round(Number(data.percentage))} %
              </TextTitleGothamMediumDark>
            </View>
            <View>
              <TextTitleGothamMediumBlack>
                {dateFormatter(data.dateIni)} - {dateFormatter(data.dateEnd)}
                <View>
                  <BtnArrowRight style={{ alignItems: 'flex-end' }} />
                </View>
              </TextTitleGothamMediumBlack>
            </View>
          </PercentageDateContainer>
        </TouchableContainer>
        {itemData.length === 0 || (itemData.length - 1 === itemQty && <ListDivider />)}
      </View>
    </View>
  );
};

export default FillRateWeeklyListCard;
