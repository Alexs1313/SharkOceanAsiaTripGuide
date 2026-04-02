import LinearGradient from 'react-native-linear-gradient';

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';

import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';
import type {QuizQuestion} from '../Oceatrippguiddecpnts/oceatrippguidQuizEngine';

type RouteParams = {questions?: QuizQuestion[]};

const Oceatrippguiddequzpla = () => {
  const oceatrippguidNavigation = useNavigation<any>();
  const oceatrippguidRoute = useRoute<any>();
  const oceatrippguidQuestions = ((oceatrippguidRoute?.params as
    | RouteParams
    | undefined
  )?.questions ??
    []) as QuizQuestion[];

  const [oceatrippguidIdx, setOceatrippguidIdx] = useState(0);
  const [oceatrippguidSelectedId, setOceatrippguidSelectedId] = useState<
    string | null
  >(null);
  const [oceatrippguidLocked, setOceatrippguidLocked] = useState(false);
  const [oceatrippguidScore, setOceatrippguidScore] = useState(0);
  const [oceatrippguidSecondsLeft, setOceatrippguidSecondsLeft] =
    useState(15);
  const oceatrippguidTimerRef = useRef<
    ReturnType<typeof setInterval> | null
  >(null);

  const oceatrippguidCurrent = oceatrippguidQuestions[oceatrippguidIdx];
  const oceatrippguidTotal = oceatrippguidQuestions.length;

  useEffect(() => {
    if (!oceatrippguidCurrent) {
      return;
    }

    setOceatrippguidSecondsLeft(15);
    setOceatrippguidSelectedId(null);
    setOceatrippguidLocked(false);

    if (oceatrippguidTimerRef.current) {
      clearInterval(oceatrippguidTimerRef.current);
      oceatrippguidTimerRef.current = null;
    }

    oceatrippguidTimerRef.current = setInterval(() => {
      setOceatrippguidSecondsLeft(prev => {
        if (prev <= 1) {
          if (oceatrippguidTimerRef.current) {
            clearInterval(oceatrippguidTimerRef.current);
            oceatrippguidTimerRef.current = null;
          }
          setOceatrippguidLocked(true);
          setOceatrippguidSelectedId(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (oceatrippguidTimerRef.current) {
        clearInterval(oceatrippguidTimerRef.current);
        oceatrippguidTimerRef.current = null;
      }
    };
  }, [oceatrippguidIdx, oceatrippguidCurrent]);

  const oceatrippguidChoose = () => {
    if (!oceatrippguidCurrent) {
      return;
    }
    if (!oceatrippguidSelectedId) {
      return;
    }
    if (oceatrippguidLocked) {
      return;
    }

    setOceatrippguidLocked(true);
    if (oceatrippguidSelectedId === oceatrippguidCurrent.correctId) {
      setOceatrippguidScore(s => s + 1);
    }
    if (oceatrippguidTimerRef.current) {
      clearInterval(oceatrippguidTimerRef.current);
      oceatrippguidTimerRef.current = null;
    }
  };

  const oceatrippguidNext = () => {
    if (oceatrippguidIdx >= oceatrippguidTotal - 1) {
      oceatrippguidNavigation.navigate('Oceatrippguiddequzresult', {
        score: oceatrippguidScore,
        total: oceatrippguidTotal,
      });
      return;
    }
    setOceatrippguidIdx(i => i + 1);
  };

  const oceatrippguidChooseLabel = oceatrippguidLocked
    ? 'Next question'
    : 'Choose';

  const oceatrippguidHeader = useMemo(() => {
    return (
      <View style={styles.oceatrippguidHeaderRow}>
        <Image source={require('../../assets/i/oceatrippguohead1.png')} />
        <LinearGradient
          colors={['#009BFF', '#005D99']}
          style={styles.oceatrippguidHeaderTitlePill}>
          <View style={{paddingHorizontal: 9}}>
            <Text style={styles.oceatrippguidHeaderTitle}>
              {Platform.OS === 'ios'
                ? 'Welcome to Shark Trip Guide Ocean'
                : 'Welcome to Shark Ocean Asia Trip Guide'}
            </Text>
          </View>
        </LinearGradient>
        <Image source={require('../../assets/i/oceatrippguohead2.png')} />
      </View>
    );
  }, []);

  if (!oceatrippguidCurrent) {
    return (
      <Oceatrippguiddelayoutt>
        <View style={styles.oceatrippguidScreen}>
          {oceatrippguidHeader}
          <LinearGradient
            colors={['#055384', '#055384']}
            style={styles.oceatrippguidEmptyCard}>
            <Text style={styles.oceatrippguidEmptyTitle}>Quiz</Text>
            <Text style={styles.oceatrippguidEmptyText}>
              No questions yet. Go back and press Start.
            </Text>
          </LinearGradient>
          <Oceatrippguiddeanimpress
            onPress={() => oceatrippguidNavigation.goBack()}
            contentStyle={styles.oceatrippguidPrimaryBtn}>
            <Text style={styles.oceatrippguidPrimaryText}>Back</Text>
          </Oceatrippguiddeanimpress>
        </View>
      </Oceatrippguiddelayoutt>
    );
  }

  return (
    <Oceatrippguiddelayoutt>
      <View style={styles.oceatrippguidScreen}>
        {oceatrippguidHeader}

        <View style={styles.oceatrippguidQuizTopRow}>
          <LinearGradient
            colors={['#009BFF', '#005D99']}
            style={styles.oceatrippguidQuizTopPill}>
            <Text style={styles.oceatrippguidQuizTopText}>
              Question {oceatrippguidIdx + 1}/{oceatrippguidTotal}
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#009BFF', '#005D99']}
            style={styles.oceatrippguidQuizTopPill}>
            <Text style={styles.oceatrippguidQuizTopText}>
              00:{String(oceatrippguidSecondsLeft).padStart(2, '0')}
            </Text>
          </LinearGradient>
        </View>

        <View style={styles.oceatrippguidQuizImageCard}>
          <View style={styles.oceatrippguidQuizImagePad}>
            <View style={styles.oceatrippguidQuizWhoPill}>
              <Text style={styles.oceatrippguidQuizWho}>Who is this?</Text>
            </View>
            <Image
              source={oceatrippguidCurrent.image}
              style={styles.oceatrippguidQuizImage}
            />
          </View>
        </View>

        <View style={styles.oceatrippguidOptions}>
          {oceatrippguidCurrent.options.map(opt => {
            const isSelected = oceatrippguidSelectedId === opt.id;
            const isSelectedCorrect =
              oceatrippguidLocked &&
              isSelected &&
              opt.id === oceatrippguidCurrent.correctId;
            const isSelectedWrong =
              oceatrippguidLocked &&
              isSelected &&
              opt.id !== oceatrippguidCurrent.correctId;

            const colors = isSelectedCorrect
              ? ['#11CE00', '#11CE00']
              : isSelectedWrong
              ? ['#CE0003', '#CE0003']
              : !oceatrippguidLocked && isSelected
              ? ['rgba(0, 92, 153, 0.81)', 'rgba(0, 92, 153, 0.82)']
              : ['#009BFF', '#005D99'];

            return (
              <Oceatrippguiddeanimpress
                key={opt.id}
                onPress={() => {
                  if (oceatrippguidLocked) {
                    return;
                  }
                  setOceatrippguidSelectedId(opt.id);
                }}
                style={styles.oceatrippguidOptionWrap}
                contentStyle={styles.oceatrippguidOptionContent}>
                <LinearGradient
                  colors={colors}
                  style={styles.oceatrippguidOption}>
                  <Text style={styles.oceatrippguidOptionText}>
                    {opt.title}
                  </Text>
                </LinearGradient>
              </Oceatrippguiddeanimpress>
            );
          })}
        </View>

        <View style={styles.oceatrippguidBottomRow}>
          <Oceatrippguiddeanimpress
            onPress={() => oceatrippguidNavigation.goBack()}
            style={styles.oceatrippguidResultBackWrap}
            contentStyle={styles.oceatrippguidResultBackBtn}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidResultBackBtn}>
              <Image source={require('../../assets/i/oceatrippbak.png')} />
            </LinearGradient>
          </Oceatrippguiddeanimpress>

          <View style={styles.oceatrippguidBottomFlex}>
            <Oceatrippguiddeanimpress
              onPress={() =>
                oceatrippguidLocked
                  ? oceatrippguidNext()
                  : oceatrippguidChoose()
              }>
              <LinearGradient
                colors={['#009BFF', '#005D99']}
                style={styles.oceatrippguidPrimaryBtn}>
                <Text style={styles.oceatrippguidPrimaryText}>
                  {oceatrippguidChooseLabel}
                </Text>
              </LinearGradient>
            </Oceatrippguiddeanimpress>
          </View>
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddequzpla;

const styles = StyleSheet.create({
  oceatrippguidScreen: {
    flexGrow: 1,
    paddingTop: 65,
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
  oceatrippguidHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  oceatrippguidHeaderTitlePill: {
    flex: 1,
    minHeight: 86,
    borderRadius: 314,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidQuizTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  oceatrippguidQuizTopPill: {
    flex: 1,
    height: 44,
    borderRadius: 315,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidQuizTopText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidQuizImageCard: {
    marginTop: 14,
  },
  oceatrippguidQuizImagePad: {
    padding: 12,
  },
  oceatrippguidQuizWhoPill: {
    width: 215,
    height: 40,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    zIndex: 1,
  },
  oceatrippguidQuizWho: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidQuizImage: {
    width: '100%',
    height: 180,
    borderRadius: 22,
  },
  oceatrippguidOptions: {
    marginTop: 12,
    gap: 12,
  },
  oceatrippguidOptionWrap: {
    borderRadius: 22,
  },
  oceatrippguidOptionContent: {
    borderRadius: 22,
  },
  oceatrippguidOption: {
    height: 62,
    borderRadius: 22,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidOptionText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
  },
  oceatrippguidBottomFlex: {
    flex: 1,
  },
  oceatrippguidPrimaryBtn: {
    borderRadius: 22,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    flex: 1,
  },
  oceatrippguidPrimaryText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidResultBackWrap: {
    width: 70,
    height: 70,
    borderRadius: 22,
  },
  oceatrippguidResultBackBtn: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidResultBackText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Ubuntu-Medium',
    marginTop: -2,
  },
  oceatrippguidEmptyCard: {
    marginTop: 18,
    borderRadius: 30,
    borderWidth: 0.6,
    borderColor: '#044874',
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  oceatrippguidEmptyTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidEmptyText: {
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },
});
