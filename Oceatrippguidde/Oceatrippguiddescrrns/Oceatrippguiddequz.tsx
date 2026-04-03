import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';
import {oceatrippguidQuizPool} from '../Oceatrippguiddecpnts/oceatrippguidQuizData';
import {buildQuizBatch} from '../Oceatrippguiddecpnts/oceatrippguidQuizEngine';
import {
  getQuizCursor,
  setQuizCursor,
} from '../Oceatrippguiddecpnts/oceatrippguidQuizProgress';

type OceatrippguidRootNav = {
  navigate: (screen: string, params?: any) => void;
  getParent?: () => OceatrippguidRootNav | undefined;
};

const Oceatrippguiddequz = () => {
  const navigation = useNavigation<OceatrippguidRootNav>();
  const stackNav = navigation.getParent?.() as OceatrippguidRootNav | undefined;
  return (
    <Oceatrippguiddelayoutt>
      <View style={styles.oceatrippguidScreen}>
        <View style={styles.oceatrippguidHeaderRow}>
          <Image source={require('../../assets/i/oceatrippguohead1.png')} />
          <LinearGradient
            colors={['#009BFF', '#005D99']}
            style={styles.oceatrippguidHeaderTitlePill}>
            <View style={{paddingHorizontal: 14}}>
              <Text style={styles.oceatrippguidHeaderTitle}>
                Welcome to Shark Trip Guide Ocean
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.oceatrippguidQuizHero}>
          <Image source={require('../../assets/i/oceatrippguftest.png')} />
        </View>

        <View style={styles.oceatrippguidQuizCard}>
          <View style={styles.oceatrippguidQuizCardPad}>
            <Text style={styles.oceatrippguidQuizCardTitle}>
              Knowledge test
            </Text>
            <Text style={styles.oceatrippguidQuizCardText}>
              You will have a photo of a sea creature, your task is to correctly
              identify who it is, but be careful, you will have limited time.
            </Text>
            <Oceatrippguiddeanimpress
              onPress={async () => {
                const cursor = await getQuizCursor();
                const {questions, nextIndex} = buildQuizBatch(
                  oceatrippguidQuizPool,
                  5,
                  cursor,
                );
                await setQuizCursor(nextIndex);
                (stackNav ?? navigation).navigate('Oceatrippguiddequzpla', {
                  questions,
                });
              }}
              contentStyle={styles.oceatrippguidPrimaryBtn}>
              <Text style={styles.oceatrippguidPrimaryText}>Start</Text>
            </Oceatrippguiddeanimpress>
          </View>
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddequz;

const styles = StyleSheet.create({
  oceatrippguidScreen: {
    flexGrow: 1,
    paddingTop: 65,
    paddingHorizontal: 18,
    paddingBottom: 130,
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
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
  oceatrippguidQuizCard: {
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00243B',
    alignItems: 'center',
    backgroundColor: '#055384',
  },
  oceatrippguidQuizCardPad: {
    padding: 18,
  },
  oceatrippguidQuizCardTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidQuizCardText: {
    marginTop: 14,
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },

  oceatrippguidPrimaryBtn: {
    borderRadius: 22,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    height: 70,
  },
  oceatrippguidPrimaryText: {
    color: '#FFFFFF',
    fontSize: 22,
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
  oceatrippguidResultCard: {
    marginTop: 18,
    borderRadius: 30,
    borderWidth: 0.6,
    borderColor: '#044874',
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  oceatrippguidResultTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidResultText: {
    marginTop: 10,
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
});
