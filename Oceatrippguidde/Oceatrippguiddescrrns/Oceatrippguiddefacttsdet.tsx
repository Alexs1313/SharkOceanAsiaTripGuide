import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {Image, Platform, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';
import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';
import {
  oceatrippguidFactsByCategory,
  type OceatrippguidFactsCategory,
} from '../Oceatrippguiddecpnts/oceatrippguidFactsData';

type RouteParams = {category?: OceatrippguidFactsCategory; fact?: string};

const pickRandom = (arr: string[]) => {
  if (arr.length === 0) return '';
  return arr[Math.floor(Math.random() * arr.length)];
};

const Oceatrippguiddefacttsdet = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const category =
    ((route?.params as RouteParams | undefined)?.category as
      | OceatrippguidFactsCategory
      | undefined) ?? 'Marine Life';

  const fact = useMemo(() => {
    const passed = (route?.params as RouteParams | undefined)?.fact;
    if (passed) return passed;
    return pickRandom(oceatrippguidFactsByCategory[category] ?? []);
  }, [category, route?.params]);

  const onShare = useCallback(async () => {
    await Share.share({message: `${category}\n\n${fact}`});
  }, [category, fact]);

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

        <View style={styles.oceatrippguidSharkWrap}>
          <Image source={require('../../assets/i/oceatrippgufactshark.png')} />
        </View>

        <View style={styles.oceatrippguidFactCard}>
          <View style={{padding: 18}}>
            <Text style={styles.oceatrippguidFactTitle}>{category}</Text>
            <Text style={styles.oceatrippguidFactText}>{fact}</Text>
          </View>
        </View>

        <View style={styles.oceatrippguidActionsRow}>
          <Oceatrippguiddeanimpress
            onPress={() => navigation.goBack()}
            style={styles.oceatrippguidActionSmallWrap}
            contentStyle={styles.oceatrippguidActionSmall}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidActionSmall}>
              <Image source={require('../../assets/i/oceatrippbak.png')} />
            </LinearGradient>
          </Oceatrippguiddeanimpress>

          <View style={{flex: 1}}>
            <Oceatrippguiddeanimpress onPress={onShare}>
              <LinearGradient
                colors={['#009BFF', '#005D99']}
                style={styles.oceatrippguidActionBig}>
                <Text style={styles.oceatrippguidActionBigText}>Share</Text>
              </LinearGradient>
            </Oceatrippguiddeanimpress>
          </View>
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddefacttsdet;

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
  oceatrippguidSharkWrap: {
    marginTop: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  oceatrippguidShark: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  oceatrippguidFactCard: {
    marginTop: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00243B',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#055384',
    minHeight: 160,
  },
  oceatrippguidFactTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidFactText: {
    marginTop: 15,
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },
  oceatrippguidActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 18,
  },
  oceatrippguidActionSmallWrap: {
    width: 70,
    height: 70,
    borderRadius: 22,
  },
  oceatrippguidActionSmall: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidActionIcon: {
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Ubuntu-Medium',
    marginTop: -2,
  },
  oceatrippguidActionBigWrap: {
    flex: 1,
    height: 70,
    borderRadius: 22,
  },
  oceatrippguidActionBig: {
    flex: 1,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  oceatrippguidActionBigText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Ubuntu-Medium',
  },
});
