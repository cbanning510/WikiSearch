import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ResultCard from '../components/ResultCard';
import {stringLiterals} from '../constants';

class SearchResults extends React.Component {
  state = {
    searchResults: [],
  };

  componentDidMount() {
    const {searchText} = this.props.navigation.state.params;
    this.searchWiki(searchText);
  }

  searchWiki = async searchTerm => {
    try {
      const response = await fetch(
        `${stringLiterals.ROOT_SEARCH_URL}${searchTerm}`,
      );
      const data = await response.json();
      this.setState({searchResults: data});
    } catch (err) {
      console.log(err);
    }
  };

  openWebView = url => {
    this.props.navigation.navigate('MyWebView', {source: url});
  };

  render() {
    const {searchResults} = this.state;
    return (
      <View style={styles.searchResultsContainer}>
        {searchResults[1] && (
          <Text style={styles.resultsText}>
            Top {searchResults[1].length} Search Results
          </Text>
        )}
        <FlatList
          data={searchResults[1]}
          renderItem={({item, index}) => (
            <ResultCard
              item={item}
              description={searchResults[2][index]}
              url={searchResults[3][index]}
              setWebViewUrl={() => this.openWebView(searchResults[3][index])}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export default SearchResults;

const styles = StyleSheet.create({
  searchResultsContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 24,
    margin: 20,
  },
});
