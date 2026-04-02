import React, {useMemo, useRef} from 'react';
import {
  Animated,
  Pressable,
  type PressableProps,
  type ViewStyle,
} from 'react-native';

type Props = PressableProps & {
  scaleTo?: number;
  contentStyle?: ViewStyle | ViewStyle[];
};

const Oceatrippguiddeanimpress = ({
  scaleTo = 0.96,
  contentStyle,
  onPressIn,
  onPressOut,
  children,
  ...rest
}: Props) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = (e: any) => {
    Animated.spring(scale, {
      toValue: scaleTo,
      useNativeDriver: true,
      speed: 45,
      bounciness: 0,
    }).start();
    onPressIn?.(e);
  };

  const pressOut = (e: any) => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
    onPressOut?.(e);
  };

  const animatedStyle = useMemo(
    () => [{transform: [{scale}]}] as ViewStyle[],
    [scale],
  );

  return (
    <Pressable {...rest} onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View style={[animatedStyle, contentStyle]}>{children}</Animated.View>
    </Pressable>
  );
};

export default Oceatrippguiddeanimpress;

