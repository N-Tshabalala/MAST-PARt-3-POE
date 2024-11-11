import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import MenuList from './MenuList';
import { getMenuItems, removeMenuItem } from './menuData';

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState(getMenuItems());

 
  useEffect(() => {
    const interval = setInterval(() => {
      setMenuItems(getMenuItems()); 
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  const itemCount = menuItems.length;
  const averagePriceByCourse = menuItems.reduce((acc, item) => {
    acc[item.course] = acc[item.course] ? [...acc[item.course], item.price] : [item.price];
    return acc;
  }, {});

  const averages = Object.entries(averagePriceByCourse).map(([course, prices]) => ({
    course,
    avgPrice: (prices.reduce((sum, price) => sum + price, 0) / prices.length).toFixed(2)
  }));

  
  const handleRemoveItem = (name) => {
    removeMenuItem(name); 
    setMenuItems(getMenuItems()); 
  };

  return (
    <ImageBackground source={require('./PCP 2.png')} style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      <Text>Total items: {itemCount}</Text>
      {averages.map(({ course, avgPrice }) => (
        <Text key={course}>Average Price of {course}: R{avgPrice}</Text>
      ))}
      {/* Pass the onRemoveItem function to MenuList */}
      <MenuList menuItems={menuItems} onRemoveItem={handleRemoveItem} />
      <Button title="Add New Menu Item" onPress={() => navigation.navigate('AddMenuItem')} />
      <Button title="Filter Menu by Course" onPress={() => navigation.navigate('Filter')} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default HomeScreen;
