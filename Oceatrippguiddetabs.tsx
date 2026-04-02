import LinearGradient from 'react-native-linear-gradient';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import Oceatrippguiddeplces from './Oceatrippguidde/Oceatrippguiddescrrns/Oceatrippguiddeplces';

import Oceatrippguiddesavd from './Oceatrippguidde/Oceatrippguiddescrrns/Oceatrippguiddesavd';

import Oceatrippguiddemaap from './Oceatrippguidde/Oceatrippguiddescrrns/Oceatrippguiddemaap';
import Oceatrippguiddeblog from './Oceatrippguidde/Oceatrippguiddescrrns/Oceatrippguiddeblog';
import Oceatrippguiddefactts from './Oceatrippguidde/Oceatrippguiddescrrns/Oceatrippguiddefactts';
import Oceatrippguiddequz from './Oceatrippguidde/Oceatrippguiddescrrns/Oceatrippguiddequz';

type TabParamList = {
  Oceatrippguiddeplces: undefined;
  Oceatrippguiddesavd: undefined;
  Oceatrippguiddemaap: {focusPlaceId?: string} | undefined;
  Oceatrippguiddeblog: undefined;
  Oceatrippguiddefactts: undefined;
  Oceatrippguiddequz: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const AnimatedTabButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style as ViewStyle, styles.oceatrippguiddetabButton]}
      {...rest}>
      <Animated.View
        style={[styles.oceatrippguiddetabButtonInner, {transform: [{scale}]}]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const OceatrippguiddetabIcon = ({
  focused,
  source,
  label,

  activeTintColor = '#FFFFFF',
}: {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
  inactiveTintColor?: string;
  activeTintColor?: string;
}) => {
  return (
    <LinearGradient
      colors={focused ? ['#009BFF', '#005D99'] : ['#055384', '#055384']}
      style={[
        styles.oceatrippguiddetabIconCircle,
        focused && styles.oceatrippguiddetabIconCircleFocused,
      ]}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={source}
          tintColor={focused ? activeTintColor : null}
          style={{width: 26, height: 26}}
        />
        {focused && (
          <Text
            numberOfLines={1}
            style={[styles.oceatrippguiddetabLabel, {color: activeTintColor}]}>
            {label}
          </Text>
        )}
      </View>
    </LinearGradient>
  );
};

const oceatrippguiddetabIconPlaces = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/oceatrippguiddtab1.png')}
    label="Places"
    inactiveTintColor="#ffffff"
  />
);

const oceatrippguiddetabIconSaved = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/oceatrippguiddtab2.png')}
    label="Saved"
  />
);

const oceatrippguiddetabIconMap = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/oceatrippguiddtab3.png')}
    label="Map"
  />
);

const oceatrippguiddetabIconBlog = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/oceatrippguiddtab4.png')}
    label="Blog"
  />
);

const oceatrippguiddetabIconFacts = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/oceatrippguiddtab5.png')}
    label="Facts"
  />
);

const oceatrippguiddetabIconQuiz = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/oceatrippguiddtab6.png')}
    label="Quiz"
  />
);

const oceatrippguiddetabButton = (props: Record<string, unknown>) => (
  <AnimatedTabButton {...props} />
);

const Oceatrippguiddetabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.oceatrippguiddetabBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: oceatrippguiddetabButton,
      }}>
      <Tab.Screen
        name="Oceatrippguiddeplces"
        component={Oceatrippguiddeplces}
        options={{
          tabBarIcon: oceatrippguiddetabIconPlaces,
        }}
      />
      <Tab.Screen
        name="Oceatrippguiddesavd"
        component={Oceatrippguiddesavd}
        options={{
          tabBarIcon: oceatrippguiddetabIconSaved,
        }}
      />
      <Tab.Screen
        name="Oceatrippguiddemaap"
        component={Oceatrippguiddemaap}
        options={{
          tabBarIcon: oceatrippguiddetabIconMap,
        }}
      />
      <Tab.Screen
        name="Oceatrippguiddeblog"
        component={Oceatrippguiddeblog}
        options={{
          tabBarIcon: oceatrippguiddetabIconBlog,
        }}
      />
      <Tab.Screen
        name="Oceatrippguiddefactts"
        component={Oceatrippguiddefactts}
        options={{
          tabBarIcon: oceatrippguiddetabIconFacts,
        }}
      />
      <Tab.Screen
        name="Oceatrippguiddequz"
        component={Oceatrippguiddequz}
        options={{
          tabBarIcon: oceatrippguiddetabIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  oceatrippguiddetabButton: {
    flex: 1,
  },
  oceatrippguiddetabButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  oceatrippguiddetabIconCircle: {
    width: 55,
    height: 55,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  oceatrippguiddetabIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  oceatrippguiddetabLabel: {
    fontSize: 8,
    fontWeight: '400',
    marginTop: 2,
  },
  oceatrippguiddetabBar: {
    marginHorizontal: 7,
    elevation: 0,
    paddingTop: 16,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 45,
    paddingHorizontal: 18,
    borderColor: '#00243B',
    borderTopWidth: 1.9,
    borderTopColor: '#00243B',
    backgroundColor: '#055384',
    borderRadius: 50,
    height: 80,
    paddingBottom: 20,
    overflow: 'hidden',
    borderWidth: 1.9,
  },
});

export default Oceatrippguiddetabs;
