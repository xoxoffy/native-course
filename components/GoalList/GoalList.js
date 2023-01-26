import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import GoalItem from './GoalItem/GoalItem';

const GoalList = ({ goalList }) => {
  return (
    <View>
      <FlatList
        style={styles.goalList}
        data={goalList}
        keyExtractor={(item, index) => {
          return item.key;
        }}
        renderItem={(itemData) => {
          return <GoalItem itemData={itemData} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalList: {
    marginBottom: 85,
  },
});

export default GoalList;
