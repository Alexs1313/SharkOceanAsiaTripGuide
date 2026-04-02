import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Oceatrippguiddelayoutt from '../Oceatrippguiddecpnts/Oceatrippguiddelayoutt';
import Oceatrippguiddeanimpress from '../Oceatrippguiddecpnts/Oceatrippguiddeanimpress';

import {oceatrippguidBlogPosts} from '../Oceatrippguiddecpnts/oceatrippguidBlogData';
import {
  getLikedBlogIds,
  toggleLikedBlogId,
} from '../Oceatrippguiddecpnts/oceatrippguidBlogLikes';

type OceatrippguidRootNav = {
  navigate: (screen: string, params?: any) => void;
  getParent?: () => OceatrippguidRootNav | undefined;
};

const Oceatrippguiddeblog = () => {
  const oceatrippguidNavigation = useNavigation<OceatrippguidRootNav>();
  const oceatrippguidStackNav = oceatrippguidNavigation.getParent?.() as
    | OceatrippguidRootNav
    | undefined;
  const oceatrippguidIsFocused = useIsFocused();
  const [oceatrippguidLikedIds, oceatrippguidSetLikedIds] = useState<string[]>(
    [],
  );

  useEffect(() => {
    if (!oceatrippguidIsFocused) {
      return;
    }
    (async () => oceatrippguidSetLikedIds(await getLikedBlogIds()))();
  }, [oceatrippguidIsFocused]);

  const oceatrippguidRendered = useMemo(() => {
    const oceatrippguidLikedSet = new Set(oceatrippguidLikedIds);
    return oceatrippguidBlogPosts.map(oceatrippguidP => ({
      ...oceatrippguidP,
      isLiked: oceatrippguidLikedSet.has(oceatrippguidP.id),
    }));
  }, [oceatrippguidLikedIds]);

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

        <View style={styles.oceatrippguidCards}>
          {oceatrippguidRendered.map(oceatrippguidPost => (
            <LinearGradient
              key={oceatrippguidPost.id}
              colors={['#009BFF', '#005D99']}
              style={styles.oceatrippguidCard}>
              <View style={styles.oceatrippguidCardPad}>
                <Text style={styles.oceatrippguidCardTitle}>
                  {oceatrippguidPost.title}
                </Text>
                <View style={styles.oceatrippguidCardDivider} />
                <Text style={styles.oceatrippguidCardText} numberOfLines={2}>
                  {oceatrippguidPost.text}
                </Text>

                <View style={styles.oceatrippguidActionsRow}>
                  <Oceatrippguiddeanimpress
                    onPress={() =>
                      (
                        oceatrippguidStackNav ?? oceatrippguidNavigation
                      ).navigate('Oceatrippguiddeblogdet', {
                        blogId: oceatrippguidPost.id,
                      })
                    }
                    style={styles.oceatrippguidMoreWrap}
                    contentStyle={styles.oceatrippguidMoreBtn}>
                    <Text style={styles.oceatrippguidMoreText}>More</Text>
                  </Oceatrippguiddeanimpress>

                  {oceatrippguidPost.isLiked && (
                    <Oceatrippguiddeanimpress
                      onPress={async () => {
                        const next = await toggleLikedBlogId(
                          oceatrippguidPost.id,
                        );
                        oceatrippguidSetLikedIds(oceatrippguidPrev =>
                          next
                            ? Array.from(
                                new Set([
                                  ...oceatrippguidPrev,
                                  oceatrippguidPost.id,
                                ]),
                              )
                            : oceatrippguidPrev.filter(
                                id => id !== oceatrippguidPost.id,
                              ),
                        );
                      }}>
                      <Image
                        source={require('../../assets/i/oceatrippguosvd.png')}
                      />
                    </Oceatrippguiddeanimpress>
                  )}
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
      </View>
    </Oceatrippguiddelayoutt>
  );
};

export default Oceatrippguiddeblog;

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
  oceatrippguidCards: {
    marginTop: 16,
    gap: 14,
  },
  oceatrippguidCard: {
    borderRadius: 300,
  },
  oceatrippguidCardPad: {
    padding: 16,
  },
  oceatrippguidCardTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  oceatrippguidCardDivider: {
    height: 2,
    backgroundColor: '#044874',
    marginTop: 12,
    marginBottom: 13,
  },
  oceatrippguidCardText: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Ubuntu-Regular',
    textAlign: 'center',
  },
  oceatrippguidMoreWrap: {
    alignSelf: 'center',
    borderRadius: 999,
  },
  oceatrippguidMoreBtn: {
    minWidth: 160,
    height: 32,
    borderRadius: 999,
    backgroundColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  oceatrippguidMoreText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Ubuntu-Medium',
  },
  oceatrippguidActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 14,
  },
  oceatrippguidLikeWrap: {
    width: 44,
    height: 32,
    borderRadius: 999,
  },
  oceatrippguidLikeBtn: {
    width: 44,
    height: 32,
    borderRadius: 999,
    backgroundColor: '#044874',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oceatrippguidLikeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
    marginTop: -1,
  },
});
