import { Home } from "@/components/home/home";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToastContainer from "toastify-react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Home />
      </View>
      <ToastContainer position="bottom" />
    </SafeAreaView>
  );
}
