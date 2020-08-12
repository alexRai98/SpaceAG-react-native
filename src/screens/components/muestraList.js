import React from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import MuestraItem from './muestraItem';

function MuestraList() {
  const list = [
    {
      title: 'Muestra 1',
      key: '1',
    },
    {
      title: 'Muestra 2',
      key: '2',
    },
    // {
    //     title: 'Muestra 1',
    //     key: '3',
    //   },
    //   {
    //     title: 'Muestra 2',
    //     key: '4',
    //   },
    //   {
    //     title: 'Muestra 1',
    //     key: '5',
    //   },
    //   {
    //     title: 'Muestra 2',
    //     key: '6',
    //   },
  ];
  return (
    <ScrollView>
      {list.length > 0 ? (
        <FlatList
          data={list}
          renderItem={({item}) => <MuestraItem title={item.title} />}
        />
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'gray'}}>
            No tienes nunguna muestra todavía.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
export default MuestraList;
