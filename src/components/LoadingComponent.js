import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//custom
import { COLORS, images } from "../../constants";

const LoadingComponent = ({ loading, error, phrase }) => {
  const loadingImage = images.loading;
  const errorImage = images.notFound;

  return (
    <View style={styles.loadingContainer}>
      {/*loading image*/}
      <View style={styles.loadingImageContainer}>
        <Image
          source={loading ? loadingImage : error ? errorImage : images.notFound}
          style={styles.loadingImageItem}
        />
      </View>

      {/*loading text info*/}
      <Text style={styles.loadingTextInfo}>{phrase}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //loading
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
  loadingImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loadingImageItem: {
    width: 150,
    height: 150,
  },
  loadingTextInfo: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoadingComponent;
