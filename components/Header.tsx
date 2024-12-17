import { StyleSheet, View, Image, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { PropsWithChildren, ReactElement } from "react";

const HEADER_HEIGHT = 250;
type Props = PropsWithChildren<{
 
}>;

export default function Header({
  children
}:Props) {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerimagesection}>
        <Image
          source={require("@/assets/images/matco_diag.jpg")}
          style={styles.headerLogo}
        />
        <Text style={styles.subtext1}>MatcoDiagnostics.com</Text>
        <Text style={styles.subtext2}>Help: 877-853-3738</Text>
      </View>
 <View >{children}</View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cccaca",
    padding: 20,
    flex: 1,
  },
  headerimagesection: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
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
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
