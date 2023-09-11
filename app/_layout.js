import { Image, View } from "react-native";
import { Stack } from "expo-router";
import { Provider } from "urql";

//customs
import client from "../src/graphql/client";
import { COLORS, images } from "../constants";

const LogoTitle = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={images.logoColor}
      style={{ width: 40, height: 40, borderRadius: 40 }}
    />
  </View>
);

const RootLayout = () => {
  return (
    <Provider value={client}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Let's Debug Code",
            headerStyle: { backgroundColor: COLORS.maroon },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 16,
              fontWeight: "400",
            },
            headerRight: () => <LogoTitle />,
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            title: "",
            headerStyle: { backgroundColor: COLORS.maroon },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: COLORS.white,
              fontSize: 16,
              fontWeight: "400",
            },
            headerRight: () => <LogoTitle />,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
