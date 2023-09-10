import React from "react";
import { Image, View, Text, StyleSheet, Platform } from "react-native";
import { Link } from "expo-router";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { decode } from "html-entities";
import Markdown from "react-native-markdown-display";

//customs
import { COLORS } from "../../constants/theme";

const QuestionDetailsScreen = ({ question }) => {
  //format number
  const formattedVotes =
    question.score >= 1000
      ? `${(question.score / 1000).toFixed(1)}K`
      : question.score;

  const formattedAnswers =
    question.answer_count >= 1000
      ? `${(question.answer_count / 1000).toFixed(1)}K`
      : question.answer_count;

  const formattedViews =
    question.view_count >= 1000
      ? `${(question.view_count / 1000).toFixed(1)}K`
      : question.view_count;

  //card content section
  function renderCardContentSection() {
    return (
      <View style={styles.questionsContainer}>
        {/*user image section*/}
        <View style={styles.userImageSectionContainer}>
          {/*user image item*/}
          <View style={styles.userImageSectionContainer}>
            <Image
              source={{ uri: question.userImage }}
              style={styles.userImageItem}
            />
          </View>

          {/*user name and timestamp*/}
          <View style={styles.userNameSectionContainer}>
            {/*user name item*/}
            <View style={styles.userNameTextContainer}>
              <Text numberOfLines={1} style={styles.userNameTextItem}>
                {question.userName}
              </Text>
            </View>

            {/*user name timestamp*/}
            <View style={styles.userTimeStampTextContainer}>
              <Text numberOfLines={1} style={styles.userTimeStampTextItem}>
                asked {new Date(question.creation_date * 1000).toDateString()}
              </Text>
            </View>
          </View>
        </View>

        {/*actual question section*/}
        <Link
          href={`/${question.question_id}`}
          style={styles.actualQuestionContainer}
        >
          <Text numberOfLines={2} style={styles.actualQuestionTextItem}>
            {decode(question.title)}
          </Text>
        </Link>

        {/*actual question section*/}
        <View style={styles.markDownContainer}>
          <Markdown>{decode(question.body_markdown)}</Markdown>
        </View>

        {/*question tags section*/}
        <View style={styles.tagsContainer}>
          {question.tags.map((tag, i) => (
            <View key={i} style={styles.tagsContent}>
              <Text style={styles.tagsItem}>{tag}</Text>
            </View>
          ))}
        </View>

        {/*question info section*/}
        <View style={styles.questionInfoTextContainer}>
          {/*votes item*/}
          <View style={styles.questionInfoTextContent}>
            <Text style={styles.questionInfoText}>{formattedVotes}</Text>
            <Text style={styles.questionText}>
              {" "}
              {question.score < -1
                ? "votes"
                : question.score === -1
                ? "vote"
                : question.score === 0
                ? "vote"
                : question.score > 1
                ? "votes"
                : question.score === 1
                ? "vote"
                : "vote"}{" "}
              {Platform.OS === "web" ? null : (
                <AntDesign name="like1" size={10} color={COLORS.amber} />
              )}
            </Text>
          </View>

          {/*answers item*/}
          <View style={styles.questionInfoTextContent}>
            <Text style={styles.questionInfoText}>{formattedAnswers}</Text>
            <Text style={styles.questionText}>
              {" "}
              {question.answer_count === 0
                ? "answer"
                : question.answer_count === 1
                ? "answer"
                : question.answer_count > 1
                ? "answers"
                : "answer"}{" "}
              {Platform.OS === "web" ? null : (
                <MaterialIcons
                  name="question-answer"
                  size={10}
                  color={COLORS.amber}
                />
              )}
            </Text>
          </View>

          {/*views item*/}
          <View style={styles.questionInfoTextContent}>
            <Text style={styles.questionInfoText}>{formattedViews}</Text>
            <Text style={styles.questionText}>
              {" "}
              {question.view_count === 0
                ? "views"
                : question.view_count === 1
                ? "view"
                : question.view_count > 1
                ? "views"
                : "views"}{" "}
              {Platform.OS === "web" ? null : (
                <FontAwesome name="eye" size={10} color={COLORS.amber} />
              )}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  //screen content list
  function renderScreenContentList() {
    return <>{renderCardContentSection()}</>;
  }

  //component content
  return (
    <View style={styles.questionComponentContainer}>
      {renderScreenContentList()}
    </View>
  );
};

const styles = StyleSheet.create({
  //component container
  questionComponentContainer: {
    flexDirection: "column",
  },

  //card content section
  questionsContainer: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "column",
    backgroundColor: COLORS.reechGray,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: COLORS.darkGray,
    marginBottom: 20,
  },

  //user image section
  userImageSectionContainer: {
    flexDirection: "row",
    width: Platform.OS === "web" ? "28%" : "46%",
  },
  userImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  userImageItem: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: "cover",
  },

  //user name section
  userNameSectionContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  userNameTextContainer: {
    marginBottom: 5,
  },
  userNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  userTimeStampTextContainer: {
    marginBottom: 5,
  },
  userTimeStampTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.6,
  },

  //actual question section
  actualQuestionContainer: {
    marginTop: 10,
  },
  actualQuestionTextItem: {
    color: COLORS.lightBlue,
    fontSize: 16,
    fontWeight: "600",
  },

  //markDown question section
  markDownContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: COLORS.amber,
  },

  //tags section
  tagsContainer: {
    flexWrap: "wrap",
    gap: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  tagsContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.maroon,
    borderRadius: 3,
  },
  tagsItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },

  //question info section
  questionInfoTextContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  questionInfoTextContent: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  questionInfoText: {
    top: 3,
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "600",
  },
  questionText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
});

export default QuestionDetailsScreen;
