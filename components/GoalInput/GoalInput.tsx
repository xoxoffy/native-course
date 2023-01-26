import { View, TextInput, Button, Text, StyleSheet, Modal } from 'react-native';

interface Props {
  goalInputHandler: () => void;
  addGoalHandler: () => void;
  hideModalHandler: () => void;
  inputIsValid: boolean;
  modalIsVisible: boolean;
  enteredGoalText: string;
}

const GoalInput: React.FunctionComponent<Props> = ({
  goalInputHandler,
  addGoalHandler,
  hideModalHandler: hideModalHandler,
  inputIsValid,
  modalIsVisible,
  enteredGoalText,
}) => {
  return (
    <Modal visible={modalIsVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal here!"
          onChangeText={goalInputHandler}
          onSubmitEditing={addGoalHandler}
          value={enteredGoalText}
        />
        {!inputIsValid ? (
          <Text style={styles.errorText}>Goal field is empty!</Text>
        ) : null}
      </View>
      <View style={styles.inputButtonsContainer}>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} color={'#34568B'} />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={hideModalHandler} color={'#34568B'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
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
  inputButtonsContainer: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
  errorText: {
    marginTop: 10,

    color: 'red',
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 8,
  },
});
export default GoalInput;
