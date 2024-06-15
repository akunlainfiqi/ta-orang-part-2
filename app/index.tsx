import { Text, View } from "react-native";
import { AudioPages } from "../components";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}>
      <AudioPages />
    </View>
  );
}
