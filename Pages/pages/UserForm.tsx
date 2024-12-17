import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="User Registration"  titleStyle={{ fontWeight: 'bold' }} />
        <Card.Content>
          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Submit
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'50%',
    height:'80%',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
      height:'100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    color:'#fff',
    width:'20%',
    backgroundColor: "#932807",
    marginTop: 10,
  },
});

export default UserForm;
