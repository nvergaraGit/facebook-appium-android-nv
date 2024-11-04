import React from 'react';
import {
  ListDivider,
  TextTitleGothamMediumDark,
  TextTitleGothamMediumBlack,
} from '@styles/sharedStyles';
import { TitleTextContainer } from './styles';

type Props = {
  listName: string;
  startDate: string;
  endDate: string;
};

const ListName = (props: Props) => {
  return (
    <>
      <ListDivider />
      <TitleTextContainer>
        <TextTitleGothamMediumDark>{props.listName}</TextTitleGothamMediumDark>
        <TextTitleGothamMediumBlack>
          {props.startDate} - {props.endDate}
        </TextTitleGothamMediumBlack>
      </TitleTextContainer>
      <ListDivider />
    </>
  );
};

export default ListName;
