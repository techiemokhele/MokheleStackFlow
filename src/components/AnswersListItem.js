import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { decode } from "html-entities";
import Markdown from "react-native-markdown-display";

//customs
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
            source={{
              uri: answer?.owner?.profile_image
                ? answer?.owner?.profile_image
                : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fen%2Fgifs%2F%25D0%25B0%25D0%25BD%25D0%25BE%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BD%25D1%258B%25D0%25B9&psig=AOvVaw3smk4NG8uPe9pSzz4Kj5C2&ust=1694447361079000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDQmLqyoIEDFQAAAAAdAAAAABAJ",
            }}
            style={styles.responderImageItem}
          />

          {/*responder name section*/}
          <View style={styles.responderNameContainer}>
            <Text style={styles.responderNameTextItem}>
              {answer?.owner?.display_name}{" "}
            </Text>
            {answer?.owner?.user_type === "registered" ? (
              <MaterialIcons
                name="verified"
                size={14}
                color={COLORS.lightBlue}
                style={{ marginTop: 2.8 }}
              />
            ) : null}
          </View>
        </View>
      </View>
    );
  }

  //answer section
  function renderAnswerCollectionSection() {
    //format number
    const formattedReputation =
      answer.owner.reputation >= 1000
        ? `${(answer.owner.reputation / 1000).toFixed(1)}K`
        : answer.owner.reputation;

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
            <Markdown>{decode(answer.body_markdown)}</Markdown>
          </View>

          <Text style={styles.answerTimeStampTextItem}>
            answered {new Date(answer.creation_date * 1000).toDateString()}
          </Text>

          {/*answer owner reputation*/}
          <View style={styles.reputationAnswerContainer}>
            <Text style={styles.reputationAnswerText}>
              Reputation:{" "}
              <Text style={styles.reputationAnswerTextItem}>
                {formattedReputation}
              </Text>
            </Text>

            <Text style={styles.reputationAnswerText}>
              Status:{" "}
              <Text style={styles.reputationAnswerTextItem}>
                {formattedReputation > 300
                  ? "Beginner Level  "
                  : formattedReputation >= 5000
                  ? "Intermediate Level  "
                  : formattedReputation >= 10000
                  ? "Legend Level  "
                  : "Newbie Level  "}

                {formattedReputation > 300 ? (
                  <AntDesign name="codesquare" size={16} color={COLORS.pink} />
                ) : formattedReputation >= 5000 ? (
                  <AntDesign name="codesquare" size={16} color={COLORS.amber} />
                ) : formattedReputation >= 10000 ? (
                  <AntDesign
                    name="codesquare"
                    size={16}
                    color={COLORS.greenActive}
                  />
                ) : (
                  <AntDesign name="codesquare" size={16} color={COLORS.red} />
                )}
              </Text>
            </Text>
          </View>
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
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
    borderColor: COLORS.white,
    borderWidth: 0.5,
    padding: 10,
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

  //reputation answer section
  reputationAnswerContainer: {
    marginTop: 10,
    marginLeft: "45%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: COLORS.reechGray,
  },
  reputationAnswerText: {
    marginBottom: 5,
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },
  reputationAnswerTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default AnswersListItem;
