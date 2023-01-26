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
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#1f3352' }}
        onPress={deleteGoalHandler.bind(this, itemData.item.key)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#34568B',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: 'white',
    textAlign: 'center',
    padding: 8,
  },
});

export default GoalItem;
