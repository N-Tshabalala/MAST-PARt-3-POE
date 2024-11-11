import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Course, createMenuItem } from './menuTypes';
import { addMenuItem } from './menuData';

const MenuForm = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(Course.STARTER);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    addMenuItem(createMenuItem(dishName, description, course, price));
    setDishName('');
    setDescription('');
    setCourse(Course.STARTER);
    setPrice(0);
  };

  return (
    <View>
      <Text>Dish Name:</Text>
      <TextInput value={dishName} onChangeText={(text) => setDishName(text)} />
      <Text>Description:</Text>
      <TextInput value={description} onChangeText={(text) => setDescription(text)} />
      <Text>Course:</Text>
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starter" value={Course.STARTER} />
        <Picker.Item label="Main" value={Course.MAIN} />
        <Picker.Item label="Dessert" value={Course.DESSERT} />
      </Picker>
      <Text>Price:</Text>
      <TextInput 
        value={price.toString()} 
        onChangeText={(text) => setPrice(parseFloat(text))} 
        keyboardType="numeric"
      />
      <Button title="Add Menu Item" onPress={handleSubmit} />
    </View>
  );
};

export default MenuForm;
