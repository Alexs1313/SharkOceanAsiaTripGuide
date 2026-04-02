import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import React, {useEffect, useMemo, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';

import {getFavoritePlaceIds} from '../Oceatrippguiddecpnts/oceatrippguidFavorites';
import {
  oceatrippguidCategoryTabs,
  oceatrippguidPlacesById,
  type OceatrippguidPlace,
} from '../Oceatrippguiddecpnts/oceatrippguidPlacesData';

type OceatrippguidRootNav = {
  navigate: (screen: string, params?: any) => void;
  getParent?: () => OceatrippguidRootNav | undefined;
};

const Oceatrippguiddesavd = () => {
  const navigation = useNavigation<OceatrippguidRootNav>();
  const stackNav = navigation.getParent?.() as OceatrippguidRootNav | undefined;
  const isFocused = useIsFocused();
  const [oceatrippguidIds, setOceatrippguidIds] = useState<string[]>([]);
  const [oceatrippguidFilter, setOceatrippguidFilter] =
    useState<(typeof oceatrippguidCategoryTabs)[number]['label']>('All');

  useEffect(() => {
    if (!isFocused) {
      return;
    }
    (async () => {
      const ids = await getFavoritePlaceIds();
      setOceatrippguidIds(ids);
    })();
  }, [isFocused]);

  const savedPlaces = useMemo(() => {
    const all = oceatrippguidIds
      .map(id => oceatrippguidPlacesById.get(id))
      .filter(Boolean) as OceatrippguidPlace[];
    if (oceatrippguidFilter === 'All') {
      return all;
    }
    return all.filter(p => p.category === oceatrippguidFilter);
  }, [oceatrippguidFilter, oceatrippguidIds]);

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
                style={{}}
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

        {savedPlaces.length === 0 ? (
          <>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidEmptyCard}>
              <View style={styles.oceatrippguidEmptyRow}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#055384',
                    borderRadius: 999,
                    borderWidth: 0.6,
                    borderColor: '#044874',
                    padding: 10,
                    width: 166,
                    height: 166,
                  }}>
                  <Image
                    source={require('../../assets/i/oceatrippgusempty.png')}
                  />
                </View>
                <View style={styles.oceatrippguidEmptyTextWrap}>
                  <Text style={styles.oceatrippguidEmptyTitle}>Oops..</Text>
                  <Text style={styles.oceatrippguidEmptyText}>
                    You have no saves in this category, I suggest you go back to
                    the locations and choose something interesting for yourself
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => navigation.navigate('Oceatrippguiddeplces')}>
              <LinearGradient
                colors={['#009BFF', '#005D99']}
                style={{
                  width: '100%',
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 22,
                  borderWidth: 0.6,
                  borderColor: '#044874',
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 20,
                    fontFamily: 'Ubuntu-Medium',
                  }}>
                  Go to places
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.oceatrippguidCards}>
            {savedPlaces.map(place => (
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
                      <Text
                        numberOfLines={1}
                        style={styles.oceatrippguidCardTitle}>
                        {place.title}
                      </Text>
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
        )}
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddesavd;

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
  oceatrippguidEmptyCard: {
    marginTop: 46,
    borderRadius: 750,
    borderWidth: 0.6,
    borderColor: '#044874',
  },
  oceatrippguidEmptyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 18,
  },
  oceatrippguidEmptyTextWrap: {
    flex: 1,
  },
  oceatrippguidEmptyTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidEmptyText: {
    marginTop: 6,
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Ubuntu-Regular',
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
    borderRadius: 999,
    width: '60%',
    height: 47,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  oceatrippguidCardTitle: {
    color: '#FFFFFF',
    fontFamily: 'Ubuntu-Medium',
    fontSize: 18,
  },
  oceatrippguidCardArrowWrap: {
    width: 47,
    height: 47,
    borderRadius: 999,
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
});
