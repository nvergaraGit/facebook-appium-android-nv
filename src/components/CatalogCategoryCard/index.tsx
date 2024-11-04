import React from 'react';
import { CategoriesType } from 'types/catalogs';
import { CategoryContainer, ContainerIcon, ContainerIconText } from './styles';
import { ButtonNavigation, TextTitleGothamMediumBlack } from '@styles/sharedStyles';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';
import { ItemData } from '@components/B2BCategories/B2BCategories';

type Props = {
  params: {
    item: CategoriesType | ItemData;
  };
  onNext: (item: CategoriesType | ItemData) => void;
};

const CategoryCard = (item: Props) => {
  const { onNext, params } = item;
  const { item: data } = params;

  return (
    <CategoryContainer
      disabled={data.amount === 0 ? true : false}
      style={data.amount === 0 ? { opacity: 0.3 } : null}
      onPress={() => onNext(data)}
    >
      <ContainerIconText>
        <ContainerIcon>{data.icon}</ContainerIcon>
        <TextTitleGothamMediumBlack style={{ marginLeft: 16 }}>
          {data.nameCategory} {`(${data.amount})`}
        </TextTitleGothamMediumBlack>
      </ContainerIconText>
      <ContainerIconText>
        <ButtonNavigation onPress={() => onNext(data)}>
          <IconRightArrow />
        </ButtonNavigation>
      </ContainerIconText>
    </CategoryContainer>
  );
};
export default CategoryCard;
