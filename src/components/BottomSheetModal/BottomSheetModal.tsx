import { DragHandler, DragHandlerArea } from './styles';
import React, { useEffect, useRef } from 'react';

import { Modal, PanResponder, Animated, TouchableOpacity, StyleSheet } from 'react-native';
interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
const BottomSheetModal = ({ children, isVisible, setIsVisible }: Props) => {
  const handleSwipeDown = () => {
    setIsVisible(false);
  };
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 290 })).current;
  const gestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setValue({ x: 0, y: 0 });
        gestureDy.current = 0;
      },
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy > 0) {
          pan.setValue({ x: 0, y: gesture.dy });
          gestureDy.current = gesture.dy;
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy > 50) {
          setIsVisible(false);
          handleSwipeDown();
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
        }
      },
    }),
  ).current;
  useEffect(() => {
    if (!isVisible) {
      gestureDy.current = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);
  useEffect(() => {
    if (isVisible) {
      Animated.timing(pan, {
        toValue: { x: 0, y: 0 },
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, pan]);
  const BottomAnimation = {
    transform: pan.getTranslateTransform(),
  };
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsVisible(false)}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalContainer}
        onPress={() => setIsVisible(false)}
        testID="bottom-sheet"
      >
        <Animated.View style={[styles.bottomSheet, BottomAnimation]} {...panResponder.panHandlers}>
          <DragHandlerArea>
            <DragHandler />
          </DragHandlerArea>
          {children}
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 5,
    backgroundColor: 'white',
    opacity: 1,
  },
});
export default BottomSheetModal;
