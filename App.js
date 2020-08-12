/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import Home from './src/screens/container/home';
import Details from './src/screens/container/detail'
import Detail from './src/screens/container/detail';

const App = () => {
  return (
    <View>
      {/* <Home/> */}
      <Detail/>
    </View>
  );
};

export default App;
