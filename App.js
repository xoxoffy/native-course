import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <Button title="Add Goal" onPress={addGoalHandler} />
        {!inputIsValid ? (
          <Text style={styles.errorText}>Pole nie może być puste!</Text>
        ) : null}
      </View>
      <View>
        <FlatList
          style={styles.goalList}
          data={goalList}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
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
  goalList: {
    marginBottom: 85,
  },
  errorText: {
    marginTop: 25,
    color: 'red',
    fontWeight: 'bold',
  },
});
