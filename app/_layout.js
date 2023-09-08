import { Stack } from "expo-router";
import { COLORS, images } from "../constants";
import { Image, View } from "react-native";

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
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
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
  );
};

export default RootLayout;
