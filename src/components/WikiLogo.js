import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
const logo = require('../assets/wikipedia-logo-detail.gif');

const WikiLogo = ({keyStatus}) => {
  console.log('keyStatus is ', keyStatus);
  return (
    <View>
      <Image
        source={logo}
        style={keyStatus ? styles.keysShowingImage : styles.image}
        resizeMode="contain"
      />
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
  keysShowingImage: {
    width: 100,
    height: 100,
  },
});
