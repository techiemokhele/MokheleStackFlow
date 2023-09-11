import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router";
import { useQuery } from "urql";

//components
import QuestionDetailsScreen from "../src/components/QuestionDetailsScreen";
import AnswersListItem from "../src/components/AnswersListItem";

//customs
import { getQuestionQuery } from "../src/graphql/queries";
import { COLORS, images } from "../constants";
import LoadingComponent from "../src/components/LoadingComponent";

const questionDetailsScreen = () => {
  //question id
  const { id } = useSearchParams();

  //screen data query
  const [res] = useQuery({
    query: getQuestionQuery,
    variables: { id },
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
  if (res.error) {
    return (
      <LoadingComponent
        error
        phrase={"Oops! Something went wrong. \n\n" + res.error.message}
      />
    );
  }

  //get question data
  const question = res.data.question.items[0];

  //check if id exists
  if (!question) {
    return (
      <View style={styles.questionErrorContainer}>
        <Image source={images.notFound} style={styles.questionErrorImage} />

        <Text style={styles.questionErrorText}>Question was not found!</Text>
      </View>
    );
  }

  //screen content
  return (
    <View style={styles.questionDetailsContainer}>
      <View style={styles.answerAllContainer}>
        <Text style={styles.answerAllTextItem}>
          {question.answers.length}{" "}
          {question.answers.length === 0
            ? "answers"
            : question.answers.length === 1
            ? "answer"
            : "answers"}
        </Text>
      </View>

      <FlatList
        data={question.answers}
        renderItem={({ item }) => (
          <View style={styles.answerMainContainer}>
            <AnswersListItem answer={item} />
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.questionDetailsContent}>
            <QuestionDetailsScreen question={question} />
          </View>
        }
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.answerFooter} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  questionDetailsContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  questionDetailsContent: {
    marginTop: 10,
  },

  //all answers
  answerAllContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  answerAllTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },

  answerMainContainer: {
    marginTop: 10,
  },

  //question error
  questionErrorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: COLORS.black,
  },
  questionErrorText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  questionErrorImage: {
    width: 250,
    height: 160,
  },

  //footer
  answerFooter: {
    marginBottom: Platform.OS === "ios" ? "10%" : 0,
  },
});

export default questionDetailsScreen;
