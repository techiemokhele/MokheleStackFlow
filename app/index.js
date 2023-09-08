import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";

//customs
import QuestionListItem from "../src/components/QuestionListItem";
import questions from "../assets/data/questions";

//customs
import { COLORS } from "../constants/theme";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar showHideTransition={"fade"} barStyle={"light-content"} />

      {/*questions posted*/}
      <FlatList
        data={questions.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  footer: {
    marginBottom: Platform.OS === "ios" ? "10%" : 0,
  },
});
