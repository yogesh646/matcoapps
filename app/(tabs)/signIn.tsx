import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import LabeledTextInput from "./LabeledTextInput";
import { Card } from "react-native-paper";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";

const HEADER_HEIGHT =650;

const signIn = () => {
  const [deviceSerial, setDeviceSerial] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
 <Header>
      <View style={styles.innercontainer}>
        <Image
          source={require("@/assets/images/matco_logos.jpg")}
          style={styles.logo}
        />
        <View style={styles.subinnercontainer}>
          <View style={styles.form}>
            <Text style={styles.header}>Sign In</Text>
            <LabeledTextInput
              label="Device Serail Number"
              value={deviceSerial}
              onChangeText={setDeviceSerial}
              mode="outlined"
              style={styles.input}
            />
            <LabeledTextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              style={styles.input}
            />
            <LabeledTextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInButtonText}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
          <View style={styles.formright}>
            <View style={styles.box}>
              <Text style={styles.registerheader}>Brand New Device?</Text>
              <TouchableOpacity style={styles.registerInButton}>
                <Text style={styles.registerInButtonText}>REGISTER</Text>
              </TouchableOpacity>
              <Text style={styles.registerText}>
                Uncover Everything matco has to offer by registering your brand
                new diagnostic scan tool{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
      </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cccaca",
    padding: 20,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: HEADER_HEIGHT,
    marginTop: 5,
  },
 
  headerimagesection: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  subinnercontainer: {
    marginLeft: 50,
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
  },
  subtext1: {
    color: "black",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
   marginLeft:'45%',
    marginTop: 50,
  },
  subtext2: {
    color: "black",
    width:'10%',
    marginLeft:50,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 50,
  },
  headerLogo: {
    height: 108,
    width: 300,
    bottom: 0,
    borderBottomLeftRadius: 10,
    left: 0,
    top: 0,
  },
  logo: {
    height: 150,
    width: 1050,
    alignSelf: "center",
    top: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 20,
  },
  form: {
    width: "30%",
    marginLeft: 100,
  },
  formright: {
    marginLeft: 100,
  },
  box: {
    width: 280,
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#cccaca",
    borderWidth: 2,
    marginLeft: 20,
    elevation: 0.8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    height: 30,
    width: 300,
    padding: 6,
    marginBottom: 15,
    fontSize: 12,
  },

  //signin section

  signInButton: {
    backgroundColor: "#932807",
    padding: 8,
    height: 30,
    width: "85%",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },

  signInButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  forgotPassword: {
    color: "#0066cc",
    textAlign: "center",
    fontSize: 10,
    marginTop: 10,
    textDecorationLine: "underline",
  },

  //register section

  registerInButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
    alignItems: "center",
  },

  registerheader: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 20,
  },
  registerInButton: {
    backgroundColor: "#fff", // Corrected "#ffff" to "#fff" for white color
    padding: 8,
    height: 35,
    width: "80%",
    marginLeft: 22,
    borderRadius: 5,
    borderColor: "#cccaca",
    borderWidth: 1, // Define the thickness of the border
    alignItems: "center", // Center align the content horizontally
    justifyContent: "center",
  },
  registerText: {
    fontSize: 9.5,
    marginLeft: 22,
    marginTop: 20,
    width: "85%",
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
});

export default signIn;
