import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ContactScreen;