import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';
import {
  oceatrippguidFactsByCategory,
  oceatrippguidFactsCategories,
  type OceatrippguidFactsCategory,
} from '../Oceatrippguiddecpnts/oceatrippguidFactsData';

type OceatrippguidRootNav = {
  navigate: (screen: string, params?: any) => void;
  getParent?: () => OceatrippguidRootNav | undefined;
};

const oceatrippguidPickRandom = (arr: string[]) => {
  if (arr.length === 0) {
    return '';
  }
  return arr[Math.floor(Math.random() * arr.length)];
};

const Oceatrippguiddefactts = () => {
  const oceatrippguidNavigation = useNavigation<OceatrippguidRootNav>();
  const oceatrippguidStackNav =
    oceatrippguidNavigation.getParent?.() as OceatrippguidRootNav | undefined;

  const oceatrippguidGoCategory = (
    oceatrippguidCategory: OceatrippguidFactsCategory,
  ) => {
    (oceatrippguidStackNav ?? oceatrippguidNavigation).navigate(
      'Oceatrippguiddefacttsdet',
      {
        category: oceatrippguidCategory,
        fact: oceatrippguidPickRandom(
          oceatrippguidFactsByCategory[oceatrippguidCategory],
        ),
      },
    );
  };

  const oceatrippguidGoRandom = () => {
    const oceatrippguidCategories = Object.keys(
      oceatrippguidFactsByCategory,
    ) as OceatrippguidFactsCategory[];
    const oceatrippguidCategory =
      oceatrippguidCategories[
        Math.floor(Math.random() * oceatrippguidCategories.length)
      ];
    oceatrippguidGoCategory(oceatrippguidCategory);
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

        <LinearGradient
          colors={['#009BFF', '#005D99']}
          style={styles.oceatrippguidChooseCard}>
          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 13,
            }}>
            <View
              style={{
                width: 117,
                height: 117,
                borderRadius: 315,
                backgroundColor: '#044874',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../assets/i/oceatrippgufactic.png')} />
            </View>
            <Text style={styles.oceatrippguidChooseText}>
              Choose a category
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.oceatrippguidCategories}>
          {oceatrippguidFactsCategories.map(oceatrippguidC => (
            <Pressable
              key={oceatrippguidC.key}
              onPress={() => oceatrippguidGoCategory(oceatrippguidC.title)}>
              <LinearGradient
                colors={['#009BFF', '#005D99']}
                style={styles.oceatrippguidCategoryCard}>
                <View style={{padding: 8}}>
                  <Text style={styles.oceatrippguidCategoryTitle}>
                    {oceatrippguidC.title}
                  </Text>
                  <Text style={styles.oceatrippguidCategoryAbout}>
                    {oceatrippguidC.about}
                  </Text>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={oceatrippguidGoRandom}
          style={styles.oceatrippguidRandomWrap}>
          <LinearGradient
            colors={['#055384', '#055384']}
            style={styles.oceatrippguidRandomBtn}>
            <Text style={styles.oceatrippguidRandomText}>Random fact</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddefactts;

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
  oceatrippguidChooseCard: {
    marginTop: 16,
    borderRadius: 715,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidChooseText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    width: '60%',
  },
  oceatrippguidCategories: {
    marginTop: 14,
    gap: 12,
  },
  oceatrippguidCategoryCard: {
    borderRadius: 315,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidCategoryTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidCategoryAbout: {
    marginTop: 6,
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },
  oceatrippguidRandomWrap: {
    marginTop: 20,
    borderRadius: 315,
    overflow: 'hidden',
  },
  oceatrippguidRandomBtn: {
    borderRadius: 315,
    borderWidth: 0.6,
    borderColor: '#00243B',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  oceatrippguidRandomText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
  },
});
