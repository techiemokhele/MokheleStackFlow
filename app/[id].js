import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router";

//components
import QuestionDetailsScreen from "../src/components/QuestionDetailsScreen";

//customs
import questions from "../assets/data/questions.json";
import answers from "../assets/data/answers.json";
import { COLORS, images } from "../constants";
import AnswersListItem from "../src/components/AnswersListItem";

const questionDetailsScreen = () => {
  //question id
  const { id } = useSearchParams();

  //screen query
  const questionQueryId = questions.items.find((q) => q.question_id == id);

  //check if id exists
  if (!questionQueryId) {
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
      {/* <View style={styles.answerAllContainer}>
        <Text style={styles.answerAllTextItem}>
          {answers.items.length}{" "}
          {answers.items.length == 0
            ? "answers"
            : answers.items.length == 1
            ? "answer"
            : "answers"}
        </Text>
      </View> */}

      <FlatList
        data={answers.items}
        renderItem={({ item }) => (
          <View style={styles.answerMainContaniner}>
            <AnswersListItem answer={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.questionDetailsContent}>
            <QuestionDetailsScreen question={questionQueryId} />
          </View>
        }
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
    marginTop: 10,
    paddingHorizontal: 15,
  },
  answerAllTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },

  answerMainContaniner: {
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
