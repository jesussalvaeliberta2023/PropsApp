import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./src/styles/StyleSheet";
import TouristLocation from "./src/pages/TouristLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation />
      <StatusBar style="auto" />
    </View>
  );
}