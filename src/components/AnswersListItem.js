import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const AnswersListItem = ({ answer }) => {
  const formattedAnswersCount =
    answer.score >= 1000
      ? `${(answer.score / 1000).toFixed(1)}K`
      : answer.score;

  //responder section
  function renderResponderAnswerSection() {
    return (
      <View styles={styles.responderUserContainer}>
        {/*responder image section*/}
        <View style={styles.responderImageContainer}>
          <Image
            source={{ uri: answer.responderImage }}
            style={styles.responderImageItem}
          />

          {/*responder name section*/}
          <View style={styles.responderNameContainer}>
            <Text style={styles.responderNameTextItem}>
              {answer.responderName}{" "}
            </Text>
            <MaterialIcons
              name="verified"
              size={14}
              color={COLORS.lightBlue}
              style={{ marginTop: 2.8 }}
            />
          </View>
        </View>
      </View>
    );
  }

  //answer section
  function renderAnswerCollectionSection() {
    return (
      <View style={styles.answerSectionContainer}>
        {/*scoring section*/}
        <View style={styles.leftScoringContainer}>
          <AntDesign name="upcircleo" size={24} color={COLORS.darkGray} />
          <Text style={styles.scoreCountTextItem}>{formattedAnswersCount}</Text>
          <AntDesign name="downcircleo" size={24} color={COLORS.darkGray} />
          {answer.is_accepted && (
            <Entypo
              name="check"
              size={22}
              color={COLORS.greenActive}
              style={styles.iconItem}
            />
          )}
          <Feather
            name="bookmark"
            size={16}
            color={COLORS.darkGray}
            style={styles.iconItem}
          />
          <Entypo
            name="back-in-time"
            size={16}
            color={COLORS.darkGray}
            style={styles.iconItem}
          />
        </View>

        {/*answer section*/}
        <View style={styles.rightAnswerContainer}>
          <View style={styles.answerTextContainer}>
            <Text style={styles.answerTextItem}>{answer.body_markdown}</Text>
          </View>

          <Text style={styles.answerTimeStampTextItem}>
            answered {new Date(answer.creation_date * 1000).toDateString()}
          </Text>
        </View>
      </View>
    );
  }

  //screen content list
  function renderScreenContentList() {
    return (
      <>
        {renderResponderAnswerSection()}
        {renderAnswerCollectionSection()}
      </>
    );
  }

  //screen renderer
  return <>{renderScreenContentList()}</>;
};

const styles = StyleSheet.create({
  //responder section
  responderUserContainer: {
    width: "100%",
  },
  responderImageContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  responderImageItem: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 10,
    borderColor: COLORS.amber,
    borderWidth: 0.5,
  },
  responderNameContainer: {
    left: 20,
    width: "70%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  responderNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },

  answerSectionContainer: {
    marginTop: 10,
    flexDirection: "row",
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: COLORS.amber,
    marginBottom: 25,
  },

  //scoring section
  leftScoringContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  scoreCountTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
  },
  iconItem: {
    marginTop: 10,
  },

  //answer section
  rightAnswerContainer: {
    flex: 1,
  },
  answerTextContainer: {
    backgroundColor: COLORS.reechGray,
    borderRadius: 10,
    padding: 20,
  },
  answerTextItem: {
    lineHeight: 18,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  answerTimeStampTextItem: {
    marginTop: 10,
    marginLeft: "auto",
    fontSize: 12,
    color: COLORS.white,
    opacity: 0.5,
  },
});

export default AnswersListItem;
