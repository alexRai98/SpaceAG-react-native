import React from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import {Button,  Appbar} from 'react-native-paper';
import MuestraList from '../components/muestraList'

function Home() {
  
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Muestras" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <MuestraList/>
      <Button icon="plus">Nueva Muestra</Button>
    </View>
  );
}

export default Home;
