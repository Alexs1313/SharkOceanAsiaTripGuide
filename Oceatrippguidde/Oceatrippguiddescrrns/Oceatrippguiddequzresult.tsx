import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {Image, Platform, Share, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';

import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';

type RouteParams = {score?: number; total?: number};

const Oceatrippguiddequzresult = () => {
  const oceatrippguidNavigation = useNavigation<any>();
  const oceatrippguidRoute = useRoute<any>();
  const oceatrippguidScore =
    (oceatrippguidRoute?.params as RouteParams | undefined)?.score ?? 0;
  const oceatrippguidTotal =
    (oceatrippguidRoute?.params as RouteParams | undefined)?.total ?? 5;

  const oceatrippguidResultText = useMemo(() => {
    return `You answered ${oceatrippguidScore} out of ${oceatrippguidTotal} questions correctly, great result, keep it up!`;
  }, [oceatrippguidScore, oceatrippguidTotal]);

  const oceatrippguidShare = async () => {
    await Share.share({
      message: `Result\nYou answered ${oceatrippguidScore} out of ${oceatrippguidTotal} questions correctly.`,
    });
  };

  return (
    <Oceatrippguiddelayoutt>
      <View style={styles.oceatrippguidScreen}>
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

        <View style={styles.oceatrippguidQuizHero}>
          <Image
            source={require('../../assets/i/oceatrippgufactshark.png')}
            style={styles.oceatrippguidQuizHeroImg}
          />
        </View>

        <LinearGradient
          colors={['#055384', '#055384']}
          style={styles.oceatrippguidResultCard}>
          <View style={{padding: 18}}>
            <Text style={styles.oceatrippguidResultTitle}>Result</Text>
            <Text style={styles.oceatrippguidResultText}>
              {oceatrippguidResultText}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.oceatrippguidResultActions}>
          <Oceatrippguiddeanimpress
            onPress={() =>
              oceatrippguidNavigation.replace('Oceatrippguiddetabs' as any, {
                screen: 'Oceatrippguiddequz',
              })
            }
            style={styles.oceatrippguidResultBackWrap}
            contentStyle={styles.oceatrippguidResultBackBtn}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidResultBackBtn}>
              <Image source={require('../../assets/i/oceatrippbak.png')} />
            </LinearGradient>
          </Oceatrippguiddeanimpress>

          <View style={{flex: 1}}>
            <Oceatrippguiddeanimpress onPress={oceatrippguidShare}>
              <LinearGradient
                colors={['#009BFF', '#005D99']}
                style={styles.oceatrippguidPrimaryBtn}>
                <Text style={styles.oceatrippguidPrimaryText}>Share</Text>
              </LinearGradient>
            </Oceatrippguiddeanimpress>
          </View>
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddequzresult;

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
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidQuizHero: {
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  oceatrippguidQuizHeroImg: {
    marginTop: 20,
  },
  oceatrippguidResultCard: {
    marginTop: 18,
    borderRadius: 30,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    minHeight: 165,
    justifyContent: 'center',
  },
  oceatrippguidResultTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidResultText: {
    marginTop: 15,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },
  oceatrippguidResultActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 18,
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
});
