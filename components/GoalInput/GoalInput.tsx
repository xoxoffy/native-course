import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

interface Props {
  goalInputHandler: () => void;
  addGoalHandler: () => void;
  inputIsValid: boolean;
  enteredGoalText: string;
}

const GoalInput: React.FunctionComponent<Props> = ({
  goalInputHandler,
  addGoalHandler,
  inputIsValid,
  enteredGoalText,
}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
export default GoalInput;
