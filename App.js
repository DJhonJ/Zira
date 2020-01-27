import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from './src/components/screen/Home.js';

const AppNavigator = createStackNavigator({
  home: {
      screen: Home
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
