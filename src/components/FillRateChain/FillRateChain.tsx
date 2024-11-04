import React from 'react';
import ArrowRight from '@assets/icons/icon-right-arrow.svg';
import * as Progress from 'react-native-progress';
import { TFillRateChain } from 'types/fillRate';
import { Container, TextChain } from './Styles';
import { TouchableOpacity, View } from 'react-native';

interface Props {
  fillrateChain: TFillRateChain[];
  handleItem: (chain: string) => void;
}

const FillRateChain = ({ fillrateChain, handleItem }: Props) => {
  return (
    <>
      {fillrateChain.map((element, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleItem(element.chain)}
          disabled={element.percentage === 0}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Container>
            <View>
              <TextChain chain={element.chain}>{element.chain}</TextChain>
            </View>
          </Container>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Progress.Bar
                progress={element.percentage / 100}
                color="#5F67E4"
                borderColor="#ECF1F7"
                unfilledColor="#ECF1F7"
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextChain style={{ width: 40, textAlign: 'right', marginRight: 16 }}>
                  {element.percentage === 0
                    ? '0'
                    : element.percentage === 100
                    ? '100'
                    : element.percentage % 1 === 0
                    ? element.percentage.toFixed(0)
                    : element.percentage.toFixed(1)}
                  %
                </TextChain>
                <ArrowRight />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default FillRateChain;
