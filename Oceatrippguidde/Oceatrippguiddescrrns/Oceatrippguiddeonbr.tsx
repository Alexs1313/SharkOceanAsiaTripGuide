import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';
import LinearGradient from 'react-native-linear-gradient';

const oceatrippguidData = [
  {
    id: 1,
    label: 'Welcome to Shark Trip Guide Ocean',
    title:
      'Hey, I’m your shark guide. I’ll take you through the best ocean and sea resorts across Asia. Let’s explore the deep and the shore together.',
    image: require('../../assets/i/oceatrippguon1.png'),
    button: 'Next',
  },
  {
    id: 2,
    label: 'Pick the Perfect Month',
    title:
      'I’ll show you when each place is at its best.\nChoose the right season for clear water, calm waves, and perfect relaxation.',
    image: require('../../assets/i/oceatrippguon2.png'),
    button: 'Okay',
  },
  {
    id: 3,
    label: 'Explore the Map',
    title:
      'Dive into the interactive map.\nFind top beaches, hidden spots, and must-visit ocean resorts.',
    image: require('../../assets/i/oceatrippguon3.png'),
    button: 'Continue',
  },
  {
    id: 4,
    label: 'Save Your Favorites',
    title:
      'Mark places you like and build your own travel list.\nI’ll keep everything ready for your next trip.',
    image: require('../../assets/i/oceatrippguon4.png'),
    button: 'Understood',
  },
  {
    id: 5,
    label: 'Learn the Ocean Life',
    title:
      'Test your knowledge about sea creatures.\nDiscover facts, read the blog, and become a true ocean explorer with me.',
    image: require('../../assets/i/oceatrippguon5.png'),
    button: 'Start',
  },
];

const Oceatrippguiddeonbr = () => {
  const [oceatrippguidIndex, setOceatrippguidIndex] = useState(0);
  const [oceatrippguidTypedLabel, setOceatrippguidTypedLabel] = useState('');
  const [oceatrippguidTypedTitle, setOceatrippguidTypedTitle] = useState('');
  const navigation = useNavigation<any>();
  const oceatrippguidBtnScale = useRef(new Animated.Value(1)).current;
  const oceatrippguidLabelTypingTimerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);
  const oceatrippguidIndexTypingTimerRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const onOceatrippguidIndexChange = (index: number) => {
    oceatrippguidIndex === 4
      ? navigation.replace('Oceatrippguiddetabs')
      : setOceatrippguidIndex(index + 1);
  };

  const onOceatrippguidBtnPressIn = () => {
    Animated.spring(oceatrippguidBtnScale, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 45,
      bounciness: 0,
    }).start();
  };

  const onOceatrippguidBtnPressOut = () => {
    Animated.spring(oceatrippguidBtnScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  };

  useEffect(() => {
    const oceatrippguidFullLabel = oceatrippguidData[oceatrippguidIndex].label;
    const oceatrippguidFullTitle = oceatrippguidData[oceatrippguidIndex].title;
    setOceatrippguidTypedLabel('');
    setOceatrippguidTypedTitle('');

    if (oceatrippguidLabelTypingTimerRef.current) {
      clearInterval(oceatrippguidLabelTypingTimerRef.current);
      oceatrippguidLabelTypingTimerRef.current = null;
    }
    if (oceatrippguidIndexTypingTimerRef.current) {
      clearInterval(oceatrippguidIndexTypingTimerRef.current);
      oceatrippguidIndexTypingTimerRef.current = null;
    }

    const startTitleTyping = () => {
      let oceatrippguidIndexI = 0;
      oceatrippguidIndexTypingTimerRef.current = setInterval(() => {
        oceatrippguidIndexI += 1;
        setOceatrippguidTypedTitle(
          oceatrippguidFullTitle.slice(0, oceatrippguidIndexI),
        );
        if (oceatrippguidIndexI >= oceatrippguidFullTitle.length) {
          if (oceatrippguidIndexTypingTimerRef.current) {
            clearInterval(oceatrippguidIndexTypingTimerRef.current);
            oceatrippguidIndexTypingTimerRef.current = null;
          }
        }
      }, 18);
    };

    let oceatrippguidLabelI = 0;
    oceatrippguidLabelTypingTimerRef.current = setInterval(() => {
      oceatrippguidLabelI += 1;
      setOceatrippguidTypedLabel(
        oceatrippguidFullLabel.slice(0, oceatrippguidLabelI),
      );
      if (oceatrippguidLabelI >= oceatrippguidFullLabel.length) {
        if (oceatrippguidLabelTypingTimerRef.current) {
          clearInterval(oceatrippguidLabelTypingTimerRef.current);
          oceatrippguidLabelTypingTimerRef.current = null;
        }
        startTitleTyping();
      }
    }, 22);

    return () => {
      if (oceatrippguidLabelTypingTimerRef.current) {
        clearInterval(oceatrippguidLabelTypingTimerRef.current);
        oceatrippguidLabelTypingTimerRef.current = null;
      }
      if (oceatrippguidIndexTypingTimerRef.current) {
        clearInterval(oceatrippguidIndexTypingTimerRef.current);
        oceatrippguidIndexTypingTimerRef.current = null;
      }
    };
  }, [oceatrippguidIndex]);

  return (
    <Oceatrippguiddelayoutt>
      <View style={styles.oceatrippguionbrcontainer}>
        <Image source={oceatrippguidData[oceatrippguidIndex].image} />

        <View
          style={[
            styles.oceatrippguionbBoard,
            oceatrippguidIndex === 0
              ? styles.oceatrippguionbBoardMtFirst
              : styles.oceatrippguionbBoardMt,
          ]}>
          <View style={styles.oceatrippguidpagination}>
            {oceatrippguidData.map((_, index) => (
              <Image
                key={index}
                source={
                  index <= oceatrippguidIndex
                    ? require('../../assets/i/oceatrippguonactive.png')
                    : require('../../assets/i/oceatrippguoninactive.png')
                }
              />
            ))}
          </View>
          <Text style={styles.oceatrippguionbtlbl}>
            {oceatrippguidTypedLabel}
          </Text>
          <Text style={styles.oceatrippguionbtext}>
            {oceatrippguidTypedTitle}
          </Text>
        </View>

        <Pressable
          onPressIn={onOceatrippguidBtnPressIn}
          onPressOut={onOceatrippguidBtnPressOut}
          style={styles.oceatrippguibtnContainer}
          onPress={() => onOceatrippguidIndexChange(oceatrippguidIndex)}>
          <Animated.View
            style={[
              styles.oceatrippguibtnScaleWrap,
              {transform: [{scale: oceatrippguidBtnScale}]},
            ]}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguibtn}>
              <Text style={styles.oceatrippguibtntext}>
                {oceatrippguidData[oceatrippguidIndex].button}
              </Text>
            </LinearGradient>
          </Animated.View>
        </Pressable>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddeonbr;

const styles = StyleSheet.create({
  oceatrippguionbrcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  oceatrippguibtnContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  oceatrippguibtnScaleWrap: {
    width: '100%',
  },
  oceatrippguionbBoardMtFirst: {
    marginTop: 68,
  },
  oceatrippguionbBoardMt: {
    marginTop: 28,
  },
  oceatrippguionbBoard: {
    width: '90%',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    paddingTop: 12,
    paddingBottom: 30,
    minHeight: 230,
    paddingHorizontal: 30,
    backgroundColor: '#055384',
    borderWidth: 1,
    borderColor: '#00243B',
  },
  oceatrippguibtn: {
    borderRadius: 15,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#044874',
    marginTop: 45,
  },
  oceatrippguibtnWrap: {
    alignSelf: 'center',
  },
  oceatrippguibtntext: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
    color: '#fff',
    textAlign: 'center',
  },
  oceatrippguionbtext: {
    fontSize: 15,
    fontFamily: 'Ubuntu-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  oceatrippguionbtlbl: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  oceatrippguidpagination: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
