import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button style={styles.addGoalButton} title="Add Goal" />
      </View>
      <View style={styles.goalList}>
        <Text>List of goals...</Text>
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
    marginTop: 10,
    paddingBottom: 24,
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
  goalList: {
    paddingTop: 15,
  },
});
