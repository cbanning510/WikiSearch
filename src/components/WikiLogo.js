import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
const logo = require('../assets/wikipedia-logo-detail.gif');

const WikiLogo = () => {
  return (
    <View>
      <Image source={logo} style={styles.image} resizeMode="contain" />
    </View>
  );
};

export default WikiLogo;

const styles = StyleSheet.create({
  image: {
    margin: 20,
    width: 170,
    height: 170,
  },
});
