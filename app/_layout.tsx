import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#fff" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Stack.Screen name="(home)/index" options={{ title: "Personajes" }} />
        <Stack.Screen
          name="characterDetails/[id]"
          options={{
            title: "Detalle",
            presentation: "modal",
          }}
        />
      </Stack>
    </>
  );
}
