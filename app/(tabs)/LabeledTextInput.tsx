import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

// Define the props for the component
interface LabeledTextInputProps extends TextInputProps {
  label: string;
}

const LabeledTextInput: React.FC<LabeledTextInputProps> = ({ label, ...textInputProps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  },
  label: {
    fontSize: 12,
    fontWeight: 'normal',
   
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 10,
  },
});

export default LabeledTextInput;
