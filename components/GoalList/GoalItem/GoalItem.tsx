import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

type itemData = {
  key: string;
  text: string;
};

interface Props {
  itemData: ListRenderItemInfo<itemData>;
  deleteGoalHandler: () => void;
}

const GoalItem: React.FunctionComponent<Props> = ({
  itemData,
  deleteGoalHandler,
}) => {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, itemData.item.key)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
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
