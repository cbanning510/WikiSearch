import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {stringLiterals} from '../constants';

const AppTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{stringLiterals.APP_TITLE}</Text>
    </View>
  );
};

export default AppTitle;

const styles = StyleSheet.create({
  titleContainer: {
    margin: 20,
  },
  title: {
    fontSize: 40,
  },
});
