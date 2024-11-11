import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuList = ({ menuItems, onRemoveItem }) => {
  return (
    <View>
      {menuItems.map((item) => (
        <View key={item.name} style={styles.menuItem}>
          <Text>{item.name} - R{item.price}</Text>
          {/* Button to remove the item */}
          <Button title="Remove" onPress={() => onRemoveItem(item.name)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    marginBottom: 10,
  },
});

export default MenuList;
