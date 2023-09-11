import {
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { useQuery } from "urql";

//customs
import { questionsQuery } from "../src/graphql/queries";
import QuestionListItem from "../src/components/QuestionListItem";

//customs
import { COLORS } from "../constants";
import LoadingComponent from "../src/components/LoadingComponent";

export default function Page() {
  //get data from backend
  const [res] = useQuery({
    query: questionsQuery,
    variables: { sort: "votes" },
  });

  //if screen data is loading
  if (res.fetching) {
    return (
      <LoadingComponent
        loading
        phrase={"Please wait while we load the data..."}
      />
    );
  }

  //query has an error
  // if (res.error) {
  //   return (
  //     <LoadingComponent
  //       error
  //       phrase={"Oops! Something went wrong. \n\n" + res.error.message}
  //     />
  //   );
  // }

  //show screen data
  return (
    <View style={styles.container}>
      <StatusBar showHideTransition={"fade"} barStyle={"light-content"} />

      {/*questions posted*/}
      <FlatList
        data={res.data.questions.items}
        renderItem={({ item }) => (
          <View style={styles.questionMainContainer}>
            <QuestionListItem question={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //screen content section
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  questionMainContainer: {
    marginTop: 10,
  },
  footer: {
    marginBottom: Platform.OS === "ios" ? "10%" : 0,
  },
});
