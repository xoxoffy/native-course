import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalList from './components/GoalList/GoalList';
import GoalInput from './components/GoalInput/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [inputIsValid, setInputIsValid] = useState(true);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText) {
      setInputIsValid(false);
      return;
    } else if (enteredGoalText) {
      setInputIsValid(true);
    }
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);

    setEnteredGoalText('');
  };

  const deleteGoalHandler = (id) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        inputIsValid={inputIsValid}
        enteredGoalText={enteredGoalText}
      />
      <GoalList goalList={goalList} deleteGoalHandler={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
