import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import PropTypes from 'prop-types';

const MyWebView = props => {
  const source = props.navigation.state.params.source;

  return (
    <SafeAreaView style={styles.webViewContainer}>
      <WebView source={{uri: source}} />
    </SafeAreaView>
  );
};

MyWebView.propTypes = {
  source: PropTypes.string,
};

export default MyWebView;

const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
    marginTop: 44,
  },
});
