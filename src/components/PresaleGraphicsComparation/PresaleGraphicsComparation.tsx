import React from 'react';
import {
  PresaleGraphicsText,
  PresaleGraphicsBarText,
  PresaleGraphicsContainer,
  PresaleGraphicsTitleText,
  PresaleGraphicsHeaderText,
  PresaleGraphicsBarContainer,
  PresaleGraphicsBarTextGoals,
  PresaleGraphicsContainerHeader,
  PresaleGraphicsBarContainerText,
  PresaleGraphicsBarAdvancedGoals,
  PresaleGraphicsContainerDounutGraphic,
} from './styles';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';

interface Props {
  title: string;
  progress: number;
  advanced: number;
  goals: number;
  index: number;
}

const PresaleGraphicsComparation = ({ title, progress, advanced, goals, index }: Props) => {
  console.log('index!!!!', index);
  const colors = [
    { color: '#4DD18F', tint: '#C4F0DA' },
    { color: '#F44040', tint: '#FCBFC1' },
    { color: '#8990F4', tint: '#D5D8F9' },
    { color: '#4DD18F', tint: '#C4F0DA' },
  ];
  const backgroundColor = colors[Math.floor(index) % colors.length];

  return (
    <PresaleGraphicsContainer>
      <PresaleGraphicsContainerHeader>
        <PresaleGraphicsHeaderText>{title}</PresaleGraphicsHeaderText>
      </PresaleGraphicsContainerHeader>
      <PresaleGraphicsTitleText>Cumplimiento</PresaleGraphicsTitleText>
      <PresaleGraphicsContainerDounutGraphic>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={progress}
          tintColor={backgroundColor.color}
          rotation={-90}
          arcSweepAngle={180}
          style={{ height: 70 }}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={backgroundColor.tint}
        />
        <PresaleGraphicsText>{progress}%</PresaleGraphicsText>
      </PresaleGraphicsContainerDounutGraphic>
      <PresaleGraphicsBarContainer>
        <PresaleGraphicsBarContainerText>
          <PresaleGraphicsBarAdvancedGoals>
            <PresaleGraphicsBarText>Avance:</PresaleGraphicsBarText>
            <PresaleGraphicsBarText bold>CU {advanced}</PresaleGraphicsBarText>
          </PresaleGraphicsBarAdvancedGoals>
          <PresaleGraphicsBarAdvancedGoals>
            <PresaleGraphicsBarTextGoals>Meta:</PresaleGraphicsBarTextGoals>
            <PresaleGraphicsBarTextGoals bold>CU {goals}</PresaleGraphicsBarTextGoals>
          </PresaleGraphicsBarAdvancedGoals>
        </PresaleGraphicsBarContainerText>
        <Progress.Bar
          progress={progress / 100}
          width={null}
          color={backgroundColor.color}
          unfilledColor={backgroundColor.tint}
          borderColor="#E8EBF7"
        />
      </PresaleGraphicsBarContainer>
    </PresaleGraphicsContainer>
  );
};

export default PresaleGraphicsComparation;
