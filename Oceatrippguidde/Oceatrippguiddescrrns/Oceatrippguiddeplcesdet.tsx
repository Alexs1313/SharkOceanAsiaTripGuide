import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, Platform, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';
import {
  getFavoritePlaceIds,
  toggleFavoritePlace,
} from '../Oceatrippguiddecpnts/oceatrippguidFavorites';
import {
  oceatrippguidPlacesById,
  type OceatrippguidPlace,
} from '../Oceatrippguiddecpnts/oceatrippguidPlacesData';

type RouteParams = {place?: OceatrippguidPlace; placeId?: string};

const Oceatrippguiddeplcesdet = () => {
  const oceatrippguidNavigation = useNavigation<any>();
  const oceatrippguidRoute = useRoute<any>();
  const [oceatrippguidIsSaved, setOceatrippguidIsSaved] = useState(false);

  const oceatrippguidPlace: OceatrippguidPlace = useMemo(() => {
    const params =
      (oceatrippguidRoute?.params as RouteParams | undefined) ?? undefined;

    const placeId = params?.placeId;
    const placeFromId = placeId
      ? oceatrippguidPlacesById.get(placeId)
      : undefined;
    if (placeFromId) {
      return placeFromId;
    }

    const p = params?.place;
    if (p) {
      return p;
    }

    const fallback = oceatrippguidPlacesById.get('reefs-1');
    if (fallback) {
      return fallback;
    }

    return {
      id: 'fallback',
      category: 'Reefs',
      title: 'Place',
      coords: '0.0000, 0.0000',
      description: '',
      image: require('../../assets/i/oceatrippguon1.png'),
    };
  }, [oceatrippguidRoute?.params]);

  const oceatrippguidMapUrl = useMemo(() => {
    const [latRaw, lonRaw] = oceatrippguidPlace.coords
      .split(',')
      .map(s => s.trim());
    const lat = Number(latRaw);
    const lon = Number(lonRaw);
    if (Number.isFinite(lat) && Number.isFinite(lon)) {
      return `https://www.google.com/maps?q=${lat},${lon}`;
    }
    return `https://www.google.com/maps?q=${encodeURIComponent(
      oceatrippguidPlace.coords,
    )}`;
  }, [oceatrippguidPlace.coords]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const ids = await getFavoritePlaceIds();
      if (!cancelled) {
        setOceatrippguidIsSaved(ids.includes(oceatrippguidPlace.id));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [oceatrippguidPlace.id]);

  const oceatrippguidOnToggleSave = useCallback(async () => {
    const next = await toggleFavoritePlace(oceatrippguidPlace.id);
    setOceatrippguidIsSaved(next);
  }, [oceatrippguidPlace.id]);

  const oceatrippguidOnShare = useCallback(async () => {
    const message = `${oceatrippguidPlace.title}\n📍 ${oceatrippguidPlace.coords}\n\n${oceatrippguidPlace.description}\n\n${oceatrippguidMapUrl}`;
    await Share.share({message});
  }, [
    oceatrippguidMapUrl,
    oceatrippguidPlace.coords,
    oceatrippguidPlace.description,
    oceatrippguidPlace.title,
  ]);

  return (
    <Oceatrippguiddelayoutt>
      <View style={styles.oceatrippguidDetScreen}>
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

        <View style={styles.oceatrippguidDetCard}>
          <View style={styles.oceatrippguidDetImageWrap}>
            <Image
              source={oceatrippguidPlace.image}
              style={styles.oceatrippguidDetImage}
            />
            <Oceatrippguiddeanimpress
              onPress={() => oceatrippguidNavigation.goBack()}
              style={styles.oceatrippguidDetBack}>
              <Image source={require('../../assets/i/oceatrippguohabac.png')} />
            </Oceatrippguiddeanimpress>
          </View>

          <LinearGradient
            colors={['#009BFF', '#005D99']}
            style={styles.oceatrippguidDetInfo}>
            <View style={styles.oceatrippguidDetInfoPad}>
              <Text style={styles.oceatrippguidDetTitle}>
                {oceatrippguidPlace.title}
              </Text>
              <View style={styles.oceatrippguidDetCoordsRow}>
                <Image source={require('../../assets/i/oceatrippguoloc.png')} />
                <Text style={styles.oceatrippguidDetCoords}>
                  {oceatrippguidPlace.coords}
                </Text>
              </View>
              <Text style={styles.oceatrippguidDetDesc}>
                {oceatrippguidPlace.description}
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.oceatrippguidDetActions}>
          <Oceatrippguiddeanimpress
            onPress={() =>
              oceatrippguidNavigation.navigate('Oceatrippguiddetabs', {
                screen: 'Oceatrippguiddemaap',
                params: {focusPlaceId: oceatrippguidPlace.id},
              })
            }
            style={styles.oceatrippguidDetOpenMapWrap}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidDetOpenMapBtn}>
              <Text style={styles.oceatrippguidDetOpenMapText}>
                Open in map
              </Text>
            </LinearGradient>
          </Oceatrippguiddeanimpress>

          <Oceatrippguiddeanimpress onPress={oceatrippguidOnToggleSave}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidDetIconBtn}>
              <Image
                source={
                  oceatrippguidIsSaved
                    ? require('../../assets/i/oceatrippguosaved.png')
                    : require('../../assets/i/oceatrippgusave.png')
                }
              />
            </LinearGradient>
          </Oceatrippguiddeanimpress>

          <Oceatrippguiddeanimpress onPress={oceatrippguidOnShare}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidDetIconBtn}>
              <Image source={require('../../assets/i/oceatrippgushr.png')} />
            </LinearGradient>
          </Oceatrippguiddeanimpress>
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddeplcesdet;

const styles = StyleSheet.create({
  oceatrippguidDetScreen: {
    flexGrow: 1,
    paddingTop: 65,
    paddingHorizontal: 18,
    paddingBottom: 20,
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
  oceatrippguidDetCard: {
    marginTop: 16,
    gap: 12,
  },
  oceatrippguidDetImageWrap: {
    borderRadius: 50,
    borderWidth: 0.6,
    borderColor: '#044874',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 93, 153, 0.25)',
  },
  oceatrippguidDetImage: {
    width: '100%',
    height: 200,
    borderRadius: 50,
  },
  oceatrippguidDetBack: {
    position: 'absolute',
    left: 14,
    top: 14,
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidDetBackText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
    marginTop: -1,
  },
  oceatrippguidDetInfo: {
    borderRadius: 50,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
  },
  oceatrippguidDetInfoPad: {
    padding: 20,
  },
  oceatrippguidDetTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidDetCoordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
    justifyContent: 'center',
  },

  oceatrippguidDetCoords: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Ubuntu-Regular',
  },
  oceatrippguidDetDesc: {
    marginTop: 14,
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 25,
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },
  oceatrippguidDetActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
  },
  oceatrippguidDetOpenMapWrap: {
    flex: 1,
  },
  oceatrippguidDetOpenMapBtn: {
    height: 70,
    borderRadius: 22,
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidDetOpenMapText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidDetIconBtn: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidDetIconText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Ubuntu-Medium',
  },
});
