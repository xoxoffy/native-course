import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import GoalItem from './GoalItem/GoalItem';

type GoalList = {
  key: string;
  text: string;
};

interface Props {
  goalList: GoalList[];
  deleteGoalHandler: () => void;
}

const GoalList: React.FunctionComponent<Props> = ({
  goalList,
  deleteGoalHandler,
}) => {
  return (
    <View>
      <FlatList
        style={styles.goalList}
        data={goalList}
        keyExtractor={(item, index) => {
          return item.key;
        }}
        renderItem={(itemData) => {
          return (
            <GoalItem
              itemData={itemData}
              deleteGoalHandler={deleteGoalHandler}
            />
          );
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
