import { StatusBar, StyleSheet, Text, View } from "react-native";

//customs
import QuestionListItem from "../src/components/QuestionListItem";

//customs
import { COLORS } from "../constants/theme";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar showHideTransition={"fade"} barStyle={"light-content"} />
      <QuestionListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.black,
  },
});
