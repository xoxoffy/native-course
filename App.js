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
    setGoalList((prevState) => [
      ...prevState,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);

    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        inputIsValid={inputIsValid}
        enteredGoalText={enteredGoalText}
      />
      <GoalList goalList={goalList} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '70%',
    marginRight: 5,
  },

  errorText: {
    marginTop: 25,
    color: 'red',
    fontWeight: 'bold',
  },
});
