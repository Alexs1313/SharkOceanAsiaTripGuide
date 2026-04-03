import {oceatrippguidBlogById} from '../Oceatrippguiddecpnts/oceatrippguidBlogData';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, Share, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';

import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';

import {
  getLikedBlogIds,
  toggleLikedBlogId,
} from '../Oceatrippguiddecpnts/oceatrippguidBlogLikes';

type RouteParams = {blogId?: string};

const Oceatrippguiddeblogdet = () => {
  const oceatrippguidNavigation = useNavigation<any>();
  const oceatrippguidRoute = useRoute<any>();
  const oceatrippguidBlogId =
    (oceatrippguidRoute?.params as RouteParams | undefined)?.blogId ?? 'blog-1';

  const oceatrippguidPost = useMemo(() => {
    return (
      oceatrippguidBlogById.get(oceatrippguidBlogId) ??
      oceatrippguidBlogById.get('blog-1')!
    );
  }, [oceatrippguidBlogId]);

  const [oceatrippguidLiked, oceatrippguidSetLiked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const ids = await getLikedBlogIds();
      if (!cancelled) {
        oceatrippguidSetLiked(ids.includes(oceatrippguidPost.id));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [oceatrippguidPost.id]);

  const oceatrippguidOnShare = useCallback(async () => {
    await Share.share({
      message: `${oceatrippguidPost.title}\n\n${oceatrippguidPost.text}`,
    });
  }, [oceatrippguidPost.text, oceatrippguidPost.title]);

  const oceatrippguidOnToggleLike = useCallback(async () => {
    const next = await toggleLikedBlogId(oceatrippguidPost.id);
    oceatrippguidSetLiked(next);
  }, [oceatrippguidPost.id]);

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

        <LinearGradient
          colors={['#009BFF', '#005D99']}
          style={styles.oceatrippguidCard}>
          <View style={styles.oceatrippguidCardPad}>
            <Text style={styles.oceatrippguidCardTitle}>
              {oceatrippguidPost.title}
            </Text>
            <View style={styles.oceatrippguidCardDivider} />
            <Text style={styles.oceatrippguidCardText}>
              {oceatrippguidPost.text}
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.oceatrippguidActionsRow}>
          <Oceatrippguiddeanimpress
            onPress={() => oceatrippguidNavigation.goBack()}
            style={styles.oceatrippguidActionSmallWrap}
            contentStyle={styles.oceatrippguidActionSmall}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidActionSmall}>
              <Image source={require('../../assets/i/oceatrippbak.png')} />
            </LinearGradient>
          </Oceatrippguiddeanimpress>

          <View style={{flex: 1}}>
            <Oceatrippguiddeanimpress onPress={oceatrippguidOnShare}>
              <LinearGradient
                colors={['#009BFF', '#005D99']}
                style={styles.oceatrippguidActionBigWrap}>
                <Text style={styles.oceatrippguidActionBigText}>Share</Text>
              </LinearGradient>
            </Oceatrippguiddeanimpress>
          </View>

          <Oceatrippguiddeanimpress
            onPress={oceatrippguidOnToggleLike}
            style={styles.oceatrippguidActionSmallWrap}
            contentStyle={styles.oceatrippguidActionSmall}>
            <LinearGradient
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidActionSmall}>
              <Image
                source={
                  oceatrippguidLiked
                    ? require('../../assets/i/oceatrippguliked.png')
                    : require('../../assets/i/oceatrippguolike.png')
                }
              />
            </LinearGradient>
          </Oceatrippguiddeanimpress>
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddeblogdet;

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
  oceatrippguidCard: {
    marginTop: 38,
    borderRadius: 50,
    borderWidth: 0.6,
    borderColor: '#044874',
  },
  oceatrippguidCardPad: {
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  oceatrippguidCardTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidCardDivider: {
    height: 2,
    backgroundColor: '#044874',
    marginTop: 14,
    marginBottom: 14,
  },
  oceatrippguidCardText: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 24,
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
    height: 70,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidActionBig: {
    minWidth: 160,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 153, 255, 0.65)',
    borderWidth: 0.6,
    borderColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidActionBigText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Ubuntu-Medium',
  },
});
