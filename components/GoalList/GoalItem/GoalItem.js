import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{itemData.item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#34568B',
  },
  goalItemText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default GoalItem;
