import React from 'react';
import {
  StackActions,
  NavigationActions,
  createAppContainer,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home';
import SearchResults from './screens/SearchResults';
import MyWebView from './components/MyWebView';
import Anthem from './screens/Anthem';

let Navigator = {};

const resetAction =
  StackActions &&
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})],
  });

const HomeStack = createStackNavigator(
  {
    Home: Home,
    SearchResults: SearchResults,
    MyWebView: MyWebView,
  },
  {
    headerMode: 'none',
  },
);

Navigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: {
          tabBarOnPress: ({navigation}) => navigation.dispatch(resetAction),
          tabBarLabel: 'Search',
          tabBarIcon: () => {
            return <Icon name="search" size={30} color="#4677c7" />;
          },
        },
      },
      Anthem: {
        screen: Anthem,
        navigationOptions: {
          tabBarLabel: 'Anthem',
          tabBarIcon: () => <Icon name="medkit" size={30} color="#4677c7" />,
        },
      },
    },
    {
      order: ['Home', 'Anthem'],
      tabBarOptions: {
        labelStyle: {
          fontSize: 14,
        },
        style: {
          backgroundColor: 'white',
          height: 60,
        },
      },
    },
  ),
);

export default Navigator;
