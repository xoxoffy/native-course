import { Fragment, useState } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import GoalList from './components/GoalList/GoalList';
import GoalInput from './components/GoalInput/GoalInput';
import { StatusBar } from 'expo-status-bar';

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
    <Fragment>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View style={styles.newGoalButton}>
          <Button
            onPress={() => setModalIsVisible(true)}
            title="Add New Goal"
            color="#34568B"
          />
        </View>
        <GoalList goalList={goalList} deleteGoalHandler={deleteGoalHandler} />
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          inputIsValid={inputIsValid}
          enteredGoalText={enteredGoalText}
          modalIsVisible={modalIsVisible}
          hideModalHandler={hideModalHandler}
        />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 12,
    alignItems: 'center',
    backgroundColor: '#e7eaf6',
  },
  newGoalButton: {
    justifyContent: 'center',
    width: '100%',
    height: '20%',
    paddingTop: 120,
    marginBottom: 30,
    marginTop: -60,
    borderBottomColor: '#8f6565',
    borderBottomWidth: 1,
  },
});
