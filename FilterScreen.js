import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MenuList from './MenuList';
import { getMenuItems, removeMenuItem } from './menuData'; 

import { Course } from './menuTypes';

const FilterScreen = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState(Course.STARTER);
  const [menuItems, setMenuItems] = useState(getMenuItems()); 

  
  useEffect(() => {
    setMenuItems(getMenuItems().filter((item) => item.course === selectedCourse));
  }, [selectedCourse]);

  
  const handleRemoveItem = (name) => {
    removeMenuItem(name);  
    setMenuItems(getMenuItems().filter((item) => item.course === selectedCourse)); 
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Filter by Course</Text>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(course) => setSelectedCourse(course)}
        style={{ marginBottom: 16 }}
      >
        <Picker.Item label="Starter" value={Course.STARTER} />
        <Picker.Item label="Main" value={Course.MAIN} />
        <Picker.Item label="Dessert" value={Course.DESSERT} />
      </Picker>

      {menuItems.length > 0 ? (
        <MenuList menuItems={menuItems} onRemoveItem={handleRemoveItem} />
      ) : (
        <Text>No items available for this course.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default FilterScreen;
