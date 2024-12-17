import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import * as Linking from "expo-linking";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useRef } from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import AnimatedProgressBar from "@/components/AnimatedProgressBar";
import { StyleSheet,View,Image,Text } from "react-native";
import CustomizedLoadingBar from "@/components/CustomizedLoadingBar";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [forward, setForward] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    async function starts() {
      try {
        await SplashScreen.preventAutoHideAsync();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        for (let i = 0; i <= 1000; i++ ) {
          setProgress(i / 10);
          await new Promise((resolve) => setTimeout(resolve, 5));
        }
        setForward(true);
        console.log('Fetching and progress completed');
      } catch (error) {
        console.warn(error);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    if (!update) {
      starts();
    } else {
      Linking.openURL("https://www.google.com");
    }
  }, [loaded]);
// console.log('data',data?.length);

  if (!forward) {
    return (
      <CustomizedLoadingBar progress={progress}/>
      //  <View style={styles.splashContainer}>
      //     <Image
      //       source={require("@/assets/images/Matco_splash.png")}
      //       style={styles.headerLogo}
      //     />
      //     <Text style={styles.loadingText}>
      //       Loading...{Math.round(progress)}%
      //     </Text>
      //    <Text style={styles.overlay}>
      //     <ProgressBar
      //     progress={Math.round(progress)}
      //       style={{ height: 15, width:`50%`, borderWidth: 1 ,borderRadius:2,backgroundColor:'#ffff',left:0,paddingLeft:2}} 
      //     /></Text>
      //   </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
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
