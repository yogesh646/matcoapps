import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import { Link } from "expo-router";
import LabeledTextInput from "./LabeledTextInput";
import { Card } from "react-native-paper";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import {IconButton} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HEADER_HEIGHT = 650;

const Home = () => {
  const [datas, setDatas] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    verifypassword: "",
  });
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <Header>
      <View style={styles.innercontainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <IconButton
        icon="arrow-left"  // Icon name from MaterialCommunityIcons
        size={30}
        onPress={() => console.log('Back pressed')}
      />
      <Text style={styles.backtext}>Back</Text>
    </TouchableOpacity>
        <View style={styles.subinnercontainer}>
          <View style={styles.form}>
            <Text style={styles.header}>Account Informations</Text>
            <TextInput
              label="First Name"
              value={datas.firstname}
              onChangeText={(text) => setDatas({ ...datas, firstname: text })}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Last Name"
              value={datas.lastname}
              // onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Email Address"
              value={datas.email}
              // onChangeText={setPassword}
              mode="outlined"
              keyboardType="email-address"
              style={styles.input}
            />
            <TextInput
              label="Password"
              value={datas.password}
              // onChangeText={setEmail}
              mode="outlined"
              secureTextEntry
              style={styles.input}
            />
            <TextInput
              label="Verify Password"
              value={datas.verifypassword}
              // onChangeText={setPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.formright}>
            <Text style={styles.header}>Device Information</Text>
            <TextInput
              label="First Name"
              value={datas.firstname}
              onChangeText={(text) => setDatas({ ...datas, firstname: text })}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Last Name"
              value={datas.lastname}
              // onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Email Address"
              value={datas.email}
              // onChangeText={setPassword}
              mode="outlined"
              keyboardType="email-address"
              style={styles.input}
            />
            <TextInput
              label="Password"
              value={datas.password}
              // onChangeText={setEmail}
              mode="outlined"
              secureTextEntry
              style={styles.input}
            />
           

            <View style={styles.checkcontainer}>
            <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => setChecked(!checked)}
              />
              <Text style={styles.checktext}>
               Sign Up for matco for Exclusive Details ?
              </Text>
            </View>
            <View style={styles.checkcontainer}>
            <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => setChecked(!checked)}
                // style={{ transform: [{ scale: 0 }] }}
              />
              <Text style={styles.checktext}>
                I agree to the terms and conditions
              </Text>
            </View>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInButtonText}>SIGN IN</Text>
            </TouchableOpacity>
           <View style={styles.checkcontainer}>
           <Text style={{marginTop:10,fontSize:12}}>Already Activated this device?</Text>
           <Text style={styles.forgotPassword}>Continue Here?</Text>
           <Text>
            <Link href='/signIn'>move</Link>
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
    marginLeft: "45%",
    marginTop: 50,
  },
  subtext2: {
    color: "black",
    width: "10%",
    marginLeft: 50,
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
  checkcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checktext: {
    fontSize: 12,
    marginLeft: 8,
  },
  input: {
    borderRadius: 5,
    height: 20,
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
    width: "35%",
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
    marginLeft:5,
    textDecorationLine: "underline",
  },
//backbutton
button: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  marginLeft:40
},
arrowText: {
  fontSize: 20,
  marginRight: 5,
},
backtext: {
  fontSize: 16,
  fontWeight:'bold'
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

export default Home;
