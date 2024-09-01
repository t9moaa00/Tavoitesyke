import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lowerlimit, setLowerlimit] = useState(0)
  const [higherlimit, setHigherlimit] = useState(0)

  const calculate = () => {
    const result1 = (220-age) * 0.65
    const result2 = (220-age) * 0.85
    setLowerlimit(result1)
    setHigherlimit(result2)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} placeholder='Your age' 
      value ={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowerlimit.toFixed(0)}-{higherlimit.toFixed(0)}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 20,
    margin: 24,
  },
   field: {
    marginTop: 8,
    marginBottom: 8,
  }
});
