import { useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import GoalList from './components/GoalList/GoalList';
import GoalInput from './components/GoalInput/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [inputIsValid, setInputIsValid] = useState(true);
  const [modalIsVisible, setModalIsVisible] = useState(false);

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
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.newGoalButton}>
        <Button
          onPress={() => setModalIsVisible(true)}
          title="Add New Goal"
          color="#34568B"
        />
      </View>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        inputIsValid={inputIsValid}
        enteredGoalText={enteredGoalText}
        modalIsVisible={modalIsVisible}
        hideModalHandler={hideModalHandler}
      />

      <GoalList goalList={goalList} deleteGoalHandler={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  newGoalButton: {
    justifyContent: 'center',
    height: '30%',
  },
});
