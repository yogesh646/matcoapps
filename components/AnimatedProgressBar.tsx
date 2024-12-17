import React from 'react';
import { View,Image,StyleSheet,Text} from 'react-native';
import { ProgressBar } from "react-native-paper";
interface ProgressProps {
  progress: number; 
}

const AnimatedProgressBar: React.FC<ProgressProps> = ({ progress }) => {
 
  return (
    <View style={styles.splashContainer}>
    <Image
      source={require("@/assets/images/Matco_splash.png")}
      style={styles.headerLogo}
    />
    <Text style={styles.loadingText}>
      Loading...{Math.round(progress)}%
    </Text>
   <Text style={styles.overlay}>
    <ProgressBar
      style={{ height: 15, width:`${Math.round(progress)}%`, borderWidth: 1 ,borderRadius:2,backgroundColor:'#ffff',left:0,paddingLeft:2}} 
    /></Text>
  </View>
  );
};
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f86b2",
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  overlay: {
   flex:1,
       backgroundColor: 'black',
    width: '100%',
  maxHeight:17,
    marginTop:15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontFamily: "bold",
    color: "#f4f4f7",
    marginBottom: 40,
  },
  progressBar: {
    width: "80%",
  },
  headerLogo: {
    height: "50%",
    resizeMode: "contain",
  },
});

export default AnimatedProgressBar;
