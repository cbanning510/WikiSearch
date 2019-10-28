import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const Anthem = () => {
  const source = 'https://www.anthem.com';
  return (
    <View style={styles.webViewContainer}>
      <WebView source={{uri: source}} />
    </View>
  );
};

export default Anthem;

const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
    marginTop: 30,
  },
});
