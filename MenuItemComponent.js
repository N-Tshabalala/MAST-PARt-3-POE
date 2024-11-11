import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuItemComponent = ({ menuItem }) => (
  <View style={styles.item}>
    <Text style={styles.dishName}>{menuItem.dishName}</Text>
    <Text>{menuItem.description}</Text>
    <Text>Course: {menuItem.course}</Text>
    <Text>Price: ${menuItem.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: { padding: 10, marginVertical: 8, borderBottomWidth: 1 },
  dishName: { fontWeight: 'bold', fontSize: 16 },
});

export default MenuItemComponent;
