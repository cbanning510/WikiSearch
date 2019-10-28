import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const ResultCard = props => {
  const {item, description, url, setWebViewUrl} = props;
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{item}</Text>
      {!description ? null : (
        <Text style={styles.description}>{description}</Text>
      )}
      <TouchableOpacity onPress={() => setWebViewUrl(url)}>
        <Text style={styles.url}>{url}</Text>
      </TouchableOpacity>
    </View>
  );
};

ResultCard.propTypes = {
  item: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  setWebViewUrl: PropTypes.func,
};

export default ResultCard;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,
  },
  title: {
    padding: 10,
    fontSize: 20,
  },
  description: {
    padding: 8,
    fontSize: 14,
  },
  url: {
    padding: 8,
    fontSize: 16,
    color: 'blue',
  },
});
