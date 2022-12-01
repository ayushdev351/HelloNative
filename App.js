import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import Card from './Components/Card';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style = {styles.text}>Four Cards</Text>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text : {
    backgroundColor: 'black',
    fontSize: 20,
    padding : 10,
    borderRadius: 5,
    margin : 10,
    color : 'white',
  }
});
