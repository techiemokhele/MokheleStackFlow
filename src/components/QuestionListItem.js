import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

//customs
import { COLORS } from "../../constants/theme";

const QuestionListItem = ({ question }) => {
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
      <View style={styles.actualQuestionContainer}>
        <Text numberOfLines={2} style={styles.actualQuestionTextItem}>
          {question.title}
        </Text>
      </View>

      {/*actual question section*/}
      <View style={styles.markDownContainer}>
        <Text numberOfLines={2} style={styles.markDownTextItem}>
          {question.body_markdown}
        </Text>
      </View>

      {/*question tags section*/}
      <View style={styles.tagsContainer}>
        {question.tags.map((tag) => (
          <View style={styles.tagsContent}>
            <Text key={tag} style={styles.tagsItem}>
              {tag}
            </Text>
          </View>
        ))}
      </View>

      {/*question info section*/}
      <View style={styles.questionInfoTextContainer}>
        {/*votes item*/}
        <View style={styles.questionInfoTextContent}>
          <Text style={styles.questionInfoText}>{question.score}</Text>
          <Text style={styles.questionText}> vote</Text>
        </View>

        {/*answers item*/}
        <View style={styles.questionInfoTextContent}>
          <Text style={styles.questionInfoText}>{question.answer_count}</Text>
          <Text style={styles.questionText}> answers</Text>
        </View>

        {/*views item*/}
        <View style={styles.questionInfoTextContent}>
          <Text style={styles.questionInfoText}>{question.view_count}</Text>
          <Text style={styles.questionText}> views</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: "50%",
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
  },
  markDownTextItem: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: "400",
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

export default QuestionListItem;
