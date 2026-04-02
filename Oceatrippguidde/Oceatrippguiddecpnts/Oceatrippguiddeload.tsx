import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const oceatrippguiloadhtml = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body {
    margin: 0;
    background: transparent;
  }

  .loader {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .jimu-primary-loading:before,
  .jimu-primary-loading:after {
    position: absolute;
    top: 0;
    content: '';
  }

  .jimu-primary-loading:before {
    left: -19.992px;
  }

  .jimu-primary-loading:after {
    left: 19.992px;
    animation-delay: 0.32s !important;
  }

  .jimu-primary-loading:before,
  .jimu-primary-loading:after,
  .jimu-primary-loading {
    background: #076fe5;
    animation: loading 0.8s infinite ease-in-out;
    width: 13.6px;
    height: 32px;
  }

  .jimu-primary-loading {
    margin: auto;
    position: absolute;
    right: calc(50% - 6.8px);
    top: calc(50% - 16px);
    animation-delay: 0.16s !important;
  }

  @keyframes loading {
    0%, 80%, 100% {
      opacity: .75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }
    40% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
      height: 40px;
    }
  }
</style>
</head>
<body>
  <div class="loader">
    <div class="jimu-primary-loading"></div>
  </div>
</body>
</html>`;

const Oceatrippguiddeload = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigation.replace('Oceatrippguiddeonbr');
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        console.log('timer cleared!!');
      }
    };
  }, [navigation]);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/i/oceatrippguilayy.png')}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Image source={require('../../assets/i/oceatrippguloadic.png')} />
        </View>

        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: 40,
          }}>
          <WebView
            originWhitelist={['*']}
            source={{html: oceatrippguiloadhtml}}
            style={styles.oceatrippguiloadwebView}
            scrollEnabled={false}
            transparent={true}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  oceatrippguiloadwebView: {
    width: 260,
    height: 80,
    backgroundColor: 'transparent',
  },
});

export default Oceatrippguiddeload;
