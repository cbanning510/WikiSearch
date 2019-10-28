import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

import WikiLogo from '../components/WikiLogo';
import AppTitle from '../components/AppTitle';
import {stringLiterals} from '../constants';

class Home extends React.Component {
  state = {
    searchText: '',
  };

  handleChangeText = text => {
    this.setState({
      searchText: text,
    });
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.homeSafeArea}>
          <StatusBar barStyle="dark-content" />
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.homeContainer}>
              <AppTitle />
              <WikiLogo />
              <TextInput
                style={styles.inputText}
                onChangeText={this.handleChangeText}
                value={this.state.searchText}
                placeholder={stringLiterals.SEARCH_PROMPT}
                textAlignVertical="top"
                multiline={true}
              />
              {this.state.error && (
                <Text style={styles.error}>{stringLiterals.ERROR_PROMPT}</Text>
              )}
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.state.searchText === ''
                      ? this.setState({error: true})
                      : this.props.navigation.navigate('SearchResults', {
                          searchText: this.state.searchText,
                        });
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Search</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    margin: 6,
  },
  inputText: {
    height: 50,
    width: 240,
    fontSize: 20,
    padding: 12,
    paddingTop: 12,
    margin: 20,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  homeSafeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    margin: 10,
    height: 44,
    width: 90,
    backgroundColor: '#4677c7',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    padding: 8,
    color: 'white',
  },
});
