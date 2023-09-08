import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router";

//customs
import questions from "../assets/data/questions.json";
import { COLORS, images } from "../constants";
import QuestionDetailsScreen from "../src/components/QuestionDetailsScreen";

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
      <View style={styles.questionDetailsContent}>
        <QuestionDetailsScreen question={questionQueryId} />
      </View>
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
});

export default questionDetailsScreen;
