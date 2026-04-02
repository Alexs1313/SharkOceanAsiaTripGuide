import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';

import {
  oceatrippguidCategoryTabs,
  oceatrippguidPlaces,
} from '../Oceatrippguiddecpnts/oceatrippguidPlacesData';

type OceatrippguidRootNav = {
  navigate: (screen: string, params?: any) => void;
  getParent?: () => OceatrippguidRootNav | undefined;
};

const Oceatrippguiddeplces = () => {
  const navigation = useNavigation<OceatrippguidRootNav>();
  const stackNav = navigation.getParent?.() as OceatrippguidRootNav | undefined;
  const [oceatrippguidFilter, setOceatrippguidFilter] =
    useState<(typeof oceatrippguidCategoryTabs)[number]['label']>('All');

  const oceatrippguidFilteredPlaces = useMemo(() => {
    if (oceatrippguidFilter === 'All') {
      return oceatrippguidPlaces;
    }
    return oceatrippguidPlaces.filter(p => p.category === oceatrippguidFilter);
  }, [oceatrippguidFilter]);

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

        <View style={styles.oceatrippguidTabsRow}>
          {oceatrippguidCategoryTabs.map(t => {
            const active = oceatrippguidFilter === t.label;
            return (
              <Pressable
                key={t.key}
                onPress={() => setOceatrippguidFilter(t.label)}>
                <LinearGradient
                  colors={
                    active ? ['#009BFF', '#005D99'] : ['#055384', '#055384']
                  }
                  style={[styles.oceatrippguidTab]}>
                  <Text
                    style={[
                      styles.oceatrippguidTabText,
                      active && styles.oceatrippguidTabTextActive,
                    ]}>
                    {t.label}
                  </Text>
                </LinearGradient>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.oceatrippguidCards}>
          {oceatrippguidFilteredPlaces.map(place => (
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              key={place.id}
              style={styles.oceatrippguidCard}>
              <View style={styles.oceatrippguidCardPad}>
                <Image
                  source={place.image}
                  style={styles.oceatrippguidCardImage}
                />
                <View style={styles.oceatrippguidCardOverlay}>
                  <View style={styles.oceatrippguidCardPill}>
                    <View style={styles.oceatrippguidCardPillTextWrap}>
                      <Text
                        numberOfLines={1}
                        style={styles.oceatrippguidCardTitle}>
                        {place.title}
                      </Text>
                    </View>
                  </View>
                  <Oceatrippguiddeanimpress
                    onPress={() =>
                      (stackNav ?? navigation).navigate(
                        'Oceatrippguiddeplcesdet',
                        {
                          placeId: place.id,
                        },
                      )
                    }
                    style={styles.oceatrippguidCardArrowWrap}
                    contentStyle={styles.oceatrippguidCardArrow}>
                    <Image
                      source={require('../../assets/i/oceatrippguoharr.png')}
                    />
                  </Oceatrippguiddeanimpress>
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddeplces;

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
    backgroundColor: 'rgba(0, 155, 255, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidHeaderTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidTabsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 14,
  },
  oceatrippguidTab: {
    borderRadius: 315,
    borderWidth: 0.6,
    borderColor: '#044874',
    width: 113,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
  },

  oceatrippguidTabText: {
    color: '#2AA9F7',
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidTabTextActive: {
    color: '#FFFFFF',
  },
  oceatrippguidCards: {
    marginTop: 16,
    gap: 16,
  },
  oceatrippguidCard: {
    borderRadius: 300,
    borderWidth: 0.5,
    borderColor: '#044874',
    overflow: 'hidden',
  },
  oceatrippguidCardPad: {
    padding: 12,
  },
  oceatrippguidCardImage: {
    width: '100%',
    height: 134,
    alignSelf: 'center',
    borderRadius: 68,
  },
  oceatrippguidCardOverlay: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  oceatrippguidCardPill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    width: '60%',
    height: 47,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
  },
  oceatrippguidCardPillTextWrap: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  oceatrippguidCardTitle: {
    color: '#FFFFFF',
    fontFamily: 'Ubuntu-Medium',
    fontSize: 18,
  },
  oceatrippguidCardArrow: {
    width: 47,
    height: 47,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidCardArrowWrap: {
    width: 47,
    height: 47,
    borderRadius: 999,
  },
  oceatrippguidCardArrowText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginTop: -1,
  },
  oceatrippguidCardDesc: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 10,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
});
