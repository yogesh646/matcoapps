import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated,Image } from 'react-native';

interface Progressive{
progress:number
}

const CustomizedLoadingBar:React.FC<Progressive> = ({ progress }) => {
  const [animatedWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue:progress*1.06,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [Math.round(progress)]);

  return (
    <View style={styles.container}>
       <Image
            source={require("@/assets/images/Matco_splash.png")}
          />
            <Text style={styles.text}>Loadings...{Math.round(progress)}%</Text>
      <View style={styles.barBackground}>
        <Animated.View style={[styles.barFill, { width: animatedWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%']
          }) 
        }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#1f86b2',
    alignItems: 'center',
    height:'100%',
    justifyContent: 'center',
    padding: 20,
  },
  barBackground: {
    width: '50%',
    height: 20,
    marginTop:10,
    backgroundColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 50,
    fontSize: 16,
    color:'#fff',
    fontWeight:'bold'
  },
});

export default CustomizedLoadingBar;
