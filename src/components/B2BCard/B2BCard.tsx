import React from 'react';
import {
  B2BCard,
  B2BCardTitle,
  B2BCardPercent,
  B2BCardContainer,
  B2BCardArrowButton,
  B2BCardIconContainer,
  B2BCardContainerStatus,
  B2BCardContainerMultiple,
} from './Styles';
import { View } from 'react-native';
import IconRightArrow from '@assets/icons/icon-right-arrow.svg';

interface Props {
  title: string;
  icon: React.ReactNode;
  qty: number;
  enabled?: boolean;
  status: string;
  onPress: () => void;
}

const B2B = ({ title, icon, qty, enabled, onPress }: Props) => {
  return (
    <>
      <B2BCard onPress={onPress} disabled={enabled}>
        <B2BCardContainer>
          <B2BCardIconContainer>
            {icon}
            <B2BCardContainerMultiple>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  width: 240,
                }}
              >
                <B2BCardTitle isImportant>{title}</B2BCardTitle>
                <B2BCardPercent>{qty} categorías</B2BCardPercent>
              </View>
            </B2BCardContainerMultiple>
          </B2BCardIconContainer>
          <B2BCardContainerStatus>
            <B2BCardArrowButton onPress={onPress} isImportant={false}>
              <IconRightArrow />
            </B2BCardArrowButton>
          </B2BCardContainerStatus>
        </B2BCardContainer>
      </B2BCard>
    </>
  );
};

export default B2B;
