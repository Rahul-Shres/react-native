// ListScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const dataList = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  // Add more data as needed
];

const ListScreen = () => (
  <FlatList
    data={dataList}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={{ padding: 20 }}>
        <Text>ID: {item.id}</Text>
        <Text>Title: {item.title}</Text>
      </View>
    )}
  />
);

export default ListScreen;
