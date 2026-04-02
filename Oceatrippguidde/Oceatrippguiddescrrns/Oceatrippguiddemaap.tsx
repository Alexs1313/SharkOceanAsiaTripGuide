import {
  oceatrippguidCategoryTabs,
  oceatrippguidPlaces,
  oceatrippguidPlacesById,
  type OceatrippguidPlace,
} from '../Oceatrippguiddecpnts/oceatrippguidPlacesData';

import Orientation from 'react-native-orientation-locker';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, type Region} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';
import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';

type OceatrippguidMapRouteParams = {focusPlaceId?: string};

type OceatrippguidRootNav = {
  navigate: (screen: string, params?: any) => void;
  setParams: (params: Partial<OceatrippguidMapRouteParams>) => void;
  getParent?: () => OceatrippguidRootNav | undefined;
};

const parseCoords = (coords: string) => {
  const [latRaw, lonRaw] = coords.split(',').map(s => s.trim());
  const lat = Number(latRaw);
  const lon = Number(lonRaw);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return null;
  }
  return {latitude: lat, longitude: lon};
};

const Oceatrippguiddemaap = () => {
  const navigation = useNavigation<OceatrippguidRootNav>();
  const route = useRoute();
  const stackNav = navigation.getParent?.() as OceatrippguidRootNav | undefined;
  const focusPlaceId = (route.params as OceatrippguidMapRouteParams | undefined)
    ?.focusPlaceId;
  const oceatrippguidMapRef = useRef<MapView | null>(null);
  const [oceatrippguidFilter, setOceatrippguidFilter] =
    useState<(typeof oceatrippguidCategoryTabs)[number]['label']>('All');
  const [oceatrippguidSelectedId, setOceatrippguidSelectedId] = useState<
    string | null
  >(null);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => Orientation.unlockAllOrientations();
    }, []),
  );

  const filteredPlaces = useMemo(() => {
    if (oceatrippguidFilter === 'All') {
      return oceatrippguidPlaces;
    }
    return oceatrippguidPlaces.filter(p => p.category === oceatrippguidFilter);
  }, [oceatrippguidFilter]);

  const markerPlaces = useMemo(
    () =>
      filteredPlaces
        .map(p => {
          const c = parseCoords(p.coords);
          if (!c) {
            return null;
          }
          return {place: p, coord: c};
        })
        .filter(Boolean) as {place: OceatrippguidPlace; coord: any}[],
    [filteredPlaces],
  );

  const initialRegion: Region = useMemo(() => {
    const first = markerPlaces[0]?.coord;
    const latitude = first?.latitude ?? 8.95;
    const longitude = first?.longitude ?? 119.9;
    return {
      latitude,
      longitude,
      latitudeDelta: 10,
      longitudeDelta: 10,
    };
  }, [markerPlaces]);

  useEffect(() => {
    if (!oceatrippguidMapRef.current) {
      return;
    }
    if (markerPlaces.length === 0) {
      return;
    }
    oceatrippguidMapRef.current.fitToCoordinates(
      markerPlaces.map(m => m.coord),
      {
        edgePadding: {top: 60, right: 60, bottom: 140, left: 60},
        animated: true,
      },
    );
  }, [oceatrippguidFilter, markerPlaces]);

  useEffect(() => {
    if (!focusPlaceId) {
      return;
    }
    const p = oceatrippguidPlacesById.get(focusPlaceId);
    if (!p) {
      return;
    }
    const c = parseCoords(p.coords);
    if (!c) {
      return;
    }
    setOceatrippguidFilter(p.category);
    setOceatrippguidSelectedId(p.id);
    const t = setTimeout(() => {
      oceatrippguidMapRef.current?.animateToRegion(
        {
          latitude: c.latitude,
          longitude: c.longitude,
          latitudeDelta: 0.35,
          longitudeDelta: 0.35,
        },
        450,
      );
    }, 350);
    return () => clearTimeout(t);
  }, [focusPlaceId]);

  const selectedPlace = useMemo(() => {
    if (!oceatrippguidSelectedId) {
      return null;
    }
    return filteredPlaces.find(p => p.id === oceatrippguidSelectedId) ?? null;
  }, [filteredPlaces, oceatrippguidSelectedId]);

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
                onPress={() => {
                  setOceatrippguidSelectedId(null);
                  setOceatrippguidFilter(t.label);
                }}>
                <LinearGradient
                  colors={
                    active ? ['#009BFF', '#005D99'] : ['#055384', '#055384']
                  }
                  style={styles.oceatrippguidTab}>
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

        {selectedPlace && (
          <View style={styles.oceatrippguidMapCardWrap}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              key={selectedPlace.id}
              style={styles.oceatrippguidCard}>
              <View style={styles.oceatrippguidCardPad}>
                <Image
                  source={selectedPlace.image}
                  style={styles.oceatrippguidCardImage}
                />
                <View style={styles.oceatrippguidCardOverlay}>
                  <View style={styles.oceatrippguidCardPill}>
                    <View style={styles.oceatrippguidCardPillTextWrap}>
                      <Text
                        numberOfLines={1}
                        style={styles.oceatrippguidCardTitle}>
                        {selectedPlace.title}
                      </Text>
                    </View>
                  </View>
                  <Oceatrippguiddeanimpress
                    onPress={() =>
                      (stackNav ?? navigation).navigate(
                        'Oceatrippguiddeplcesdet',
                        {
                          placeId: selectedPlace.id,
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
          </View>
        )}

        <View
          style={[
            styles.oceatrippguidMapWrap,
            {height: selectedPlace ? 250 : 400},
          ]}>
          {selectedPlace && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setOceatrippguidSelectedId(null);
                navigation.setParams({focusPlaceId: undefined});
              }}
              style={{position: 'absolute', right: 7, top: 8, zIndex: 1000}}>
              <LinearGradient
                colors={['#009BFF', '#005D99']}
                style={styles.oceatrippguidMapCloseBtn}>
                <Image
                  source={require('../../assets/i/oceatrippguomapcls.png')}
                />
              </LinearGradient>
            </TouchableOpacity>
          )}

          <MapView
            ref={r => {
              oceatrippguidMapRef.current = r;
            }}
            key={oceatrippguidFilter}
            style={[styles.oceatrippguidMap]}
            initialRegion={initialRegion}
            userInterfaceStyle="dark">
            {markerPlaces.map(({place, coord}) => (
              <Marker
                key={place.id}
                coordinate={coord}
                onPress={e => {
                  (e as any)?.stopPropagation?.();
                  setOceatrippguidSelectedId(place.id);
                }}>
                <Image
                  source={require('../../assets/i/oceatrippguomapmrk.png')}
                  style={styles.oceatrippguidMarkerIcon}
                />
              </Marker>
            ))}
          </MapView>
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddemaap;

const styles = StyleSheet.create({
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
  oceatrippguidMapWrap: {
    marginTop: 16,
    borderRadius: 22,
    borderWidth: 0.6,
    borderColor: '#044874',
    overflow: 'hidden',
    height: 330,
  },
  oceatrippguidMap: {
    flex: 1,
  },
  oceatrippguidMarkerIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  oceatrippguidMapCardWrap: {
    marginTop: 16,
  },
  oceatrippguidMapCard: {
    borderRadius: 300,
    borderWidth: 0.6,
    borderColor: '#044874',
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  oceatrippguidMapCardOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  oceatrippguidMapCardPill: {
    flex: 1,
    height: 47,
    borderRadius: 315,
    borderWidth: 0.6,
    borderColor: '#044874',
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  oceatrippguidMapCardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidMapCardArrowWrap: {
    width: 47,
    height: 47,
    borderRadius: 999,
  },
  oceatrippguidMapCardArrow: {
    width: 47,
    height: 47,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidMapCloseBtn: {
    width: 47,
    height: 47,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
