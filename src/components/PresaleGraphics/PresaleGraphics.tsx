import React, { useState } from 'react';
import {
  PresaleGraphicsText,
  PresaleGraphicsBarText,
  PresaleGraphicsContainer,
  PresaleGraphicsTitleText,
  PresaleGraphicsHeaderText,
  PresaleGraphicsTextOnecard,
  PresaleGraphicsBarContainer,
  PresaleGraphicsContainerHeader,
  PresaleGraphicsBarContainerTwo,
  PresaleGraphicsBarContainerText,
  PresaleGraphicsContainerTextBar,
  PresaleGraphicsContainerTwoCards,
  PresaleGraphicsContainerHeaderTitle,
  PresaleGraphicsHeaderSubtitleTwoCards,
  PresaleGraphicsContainerDounutGraphic,
  PresaleGraphicsContainerHeaderTwoCards,
  PresaleGraphicsHeaderShowTwoCategoriesText,
  PresaleGraphicsHeaderShowTwoCategoriesContainer,
} from './styles';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import { View } from 'react-native';

interface Datadata {
  id: number;
  headerText?: string;
  titleText?: string;
  fill?: number;
  barProgress?: number;
  barText1?: string;
  barText2?: string;
  titleText1?: string;
  titleText2?: string;
  fillgeneral: number;
  fill1?: number;
  fill2?: number;
  barProgressGeneral?: number;
  barProgress1?: number;
  barProgress2?: number;
  barText3?: string;
  barText4?: string;
}

interface Props {
  data: Datadata;
  index: number;
}

const PresaleGraphics = ({ data, index }: Props) => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const colors = [
    { color: '#4DD18F', tint: '#C4F0DA' },
    { color: '#F44040', tint: '#FCBFC1' },
    { color: '#8990F4', tint: '#D5D8F9' },
    { color: '#4DD18F', tint: '#C4F0DA' },
  ];
  const backgroundColor = colors[index % colors.length];

  const showMore = () => {
    setShowCategories(!showCategories);
  };

  return (
    <PresaleGraphicsContainer>
      {data.headerText && (
        <>
          {data.titleText1 && data.titleText2 ? (
            <PresaleGraphicsContainerHeaderTwoCards>
              <PresaleGraphicsContainerHeaderTitle>
                <PresaleGraphicsHeaderText>{data.headerText}</PresaleGraphicsHeaderText>
                <PresaleGraphicsHeaderSubtitleTwoCards>
                  Aguas y NCBS
                </PresaleGraphicsHeaderSubtitleTwoCards>
              </PresaleGraphicsContainerHeaderTitle>
              <PresaleGraphicsHeaderShowTwoCategoriesContainer onPress={showMore}>
                <PresaleGraphicsHeaderShowTwoCategoriesText>
                  {showCategories ? '- Cerrado' : '+ Aperturar'}
                </PresaleGraphicsHeaderShowTwoCategoriesText>
              </PresaleGraphicsHeaderShowTwoCategoriesContainer>
            </PresaleGraphicsContainerHeaderTwoCards>
          ) : (
            <PresaleGraphicsContainerHeader>
              <PresaleGraphicsHeaderText>{data.headerText}</PresaleGraphicsHeaderText>
            </PresaleGraphicsContainerHeader>
          )}
        </>
      )}
      {data.titleText && <PresaleGraphicsTitleText>{data.titleText}</PresaleGraphicsTitleText>}
      {data.fill && (
        <PresaleGraphicsContainerDounutGraphic>
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={data.fill}
            tintColor={backgroundColor.color}
            rotation={-90}
            arcSweepAngle={180}
            style={{ height: 70 }}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={backgroundColor.tint}
          />
          <PresaleGraphicsText>{data.fill}%</PresaleGraphicsText>
        </PresaleGraphicsContainerDounutGraphic>
      )}
      {data.barProgress && (
        <PresaleGraphicsBarContainer>
          <PresaleGraphicsBarContainerText>
            <PresaleGraphicsBarText>{data.barText1}</PresaleGraphicsBarText>
            <PresaleGraphicsBarText>{data.barText2}</PresaleGraphicsBarText>
          </PresaleGraphicsBarContainerText>
          <Progress.Bar
            progress={data.barProgress}
            width={null}
            color={backgroundColor.color}
            unfilledColor={backgroundColor.tint}
            borderColor="#E8EBF7"
          />
        </PresaleGraphicsBarContainer>
      )}

      {data.titleText1 && data.titleText2 && !showCategories && (
        <>
          <PresaleGraphicsTitleText>Proyectado Cerrado</PresaleGraphicsTitleText>
          <PresaleGraphicsContainerDounutGraphic>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={data.fillgeneral}
              tintColor={backgroundColor.color}
              rotation={-90}
              arcSweepAngle={180}
              style={{ height: 70 }}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor={backgroundColor.tint}
            />
            <PresaleGraphicsText>{data.fillgeneral}%</PresaleGraphicsText>
          </PresaleGraphicsContainerDounutGraphic>
        </>
      )}

      {data.titleText1 && data.titleText2 && showCategories && (
        <PresaleGraphicsContainerTwoCards>
          <PresaleGraphicsContainerDounutGraphic>
            <PresaleGraphicsTitleText>{data.titleText1}</PresaleGraphicsTitleText>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={data.fill1}
              tintColor={backgroundColor.color}
              rotation={-90}
              arcSweepAngle={180}
              style={{ height: 70 }}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor={backgroundColor.tint}
            />
            <PresaleGraphicsText>{data.fill1}%</PresaleGraphicsText>
          </PresaleGraphicsContainerDounutGraphic>
          <PresaleGraphicsContainerDounutGraphic>
            <PresaleGraphicsTitleText>{data.titleText2}</PresaleGraphicsTitleText>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={data.fill2}
              tintColor={backgroundColor.color}
              rotation={-90}
              arcSweepAngle={180}
              style={{ height: 70 }}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor={backgroundColor.tint}
            />
            <PresaleGraphicsText>{data.fill2}%</PresaleGraphicsText>
          </PresaleGraphicsContainerDounutGraphic>
        </PresaleGraphicsContainerTwoCards>
      )}
      {data.barProgress1 && data.barProgress2 && !showCategories && (
        <PresaleGraphicsBarContainer>
          <PresaleGraphicsBarContainerText>
            <PresaleGraphicsBarText>{data.barText1}</PresaleGraphicsBarText>
            <PresaleGraphicsBarText>{data.barText2}</PresaleGraphicsBarText>
          </PresaleGraphicsBarContainerText>
          <Progress.Bar
            progress={data.barProgressGeneral}
            width={null}
            color={backgroundColor.color}
            unfilledColor={backgroundColor.tint}
            borderColor="#E8EBF7"
          />
        </PresaleGraphicsBarContainer>
      )}
      {data.barProgress1 && data.barProgress2 && showCategories && (
        <PresaleGraphicsBarContainerTwo>
          <PresaleGraphicsContainerTextBar>
            <PresaleGraphicsBarContainerText>
              <PresaleGraphicsBarText>{data.barText1}</PresaleGraphicsBarText>
              <PresaleGraphicsBarText>{data.barText2}</PresaleGraphicsBarText>
            </PresaleGraphicsBarContainerText>
            <Progress.Bar
              progress={data.barProgress1}
              width={null}
              color={backgroundColor.color}
              unfilledColor={backgroundColor.tint}
              borderColor="#E8EBF7"
            />
          </PresaleGraphicsContainerTextBar>
          <PresaleGraphicsContainerTextBar>
            <PresaleGraphicsBarContainerText>
              <PresaleGraphicsBarText>{data.barText3}</PresaleGraphicsBarText>
              <PresaleGraphicsBarText>{data.barText4}</PresaleGraphicsBarText>
            </PresaleGraphicsBarContainerText>
            <Progress.Bar
              progress={data.barProgress2}
              width={null}
              color={backgroundColor.color}
              unfilledColor={backgroundColor.tint}
              borderColor="#E8EBF7"
            />
          </PresaleGraphicsContainerTextBar>
        </PresaleGraphicsBarContainerTwo>
      )}
    </PresaleGraphicsContainer>
  );
};

export default PresaleGraphics;
