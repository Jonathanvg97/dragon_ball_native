import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, View } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import styled from "styled-components/native";

const SkeletonContainer = styled.View`
  padding: 16px;
  background-color: #0a0a0a;
`;

// Wrapper components for shimmer placeholders
const SkeletonLine = ({
  width = "100%",
  height = 16,
}: {
  width?: string | number;
  height?: number;
}) => (
  <ShimmerPlaceholder
    LinearGradient={LinearGradient}
    shimmerColors={["#2e2e2e", "#444", "#2e2e2e"]}
    style={{
      width,
      height,
      borderRadius: 8,
      marginBottom: 12,
    }}
  />
);

const SkeletonImage = () => (
  <ShimmerPlaceholder
    LinearGradient={LinearGradient}
    shimmerColors={["#2e2e2e", "#444", "#2e2e2e"]}
    style={{
      width: "100%",
      height: 220,
      borderRadius: 16,
      marginBottom: 20,
    }}
  />
);

const PlanetImage = () => (
  <ShimmerPlaceholder
    LinearGradient={LinearGradient}
    shimmerColors={["#2e2e2e", "#444", "#2e2e2e"]}
    style={{
      width: 80,
      height: 80,
      borderRadius: 12,
    }}
  />
);

const TransformationCard = () => (
  <ShimmerPlaceholder
    LinearGradient={LinearGradient}
    shimmerColors={["#2e2e2e", "#444", "#2e2e2e"]}
    style={{
      width: 120,
      height: 150,
      borderRadius: 12,
      marginRight: 12,
    }}
  />
);

const BackButton = () => (
  <ShimmerPlaceholder
    LinearGradient={LinearGradient}
    shimmerColors={["#2e2e2e", "#444", "#2e2e2e"]}
    style={{
      width: 120,
      height: 40,
      borderRadius: 20,
      marginTop: 32,
    }}
  />
);

const SkeletonCharacterDetail = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SkeletonContainer>
        <SkeletonImage />

        <SkeletonLine width="60%" height={24} />
        <SkeletonLine width="40%" />
        <SkeletonLine width="35%" />
        <SkeletonLine width="50%" />
        <SkeletonLine width="45%" />
        <SkeletonLine width="40%" />

        <SkeletonLine width="50%" height={20} />
        <SkeletonLine width="100%" height={60} />

        <SkeletonLine width="60%" height={20} />

        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "flex-start",
            marginBottom: 24,
          }}
        >
          <PlanetImage />
          <View style={{ flex: 1 }}>
            <SkeletonLine width="80%" />
            <SkeletonLine width="90%" height={40} />
          </View>
        </View>

        <SkeletonLine width="50%" height={20} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 12 }}
        >
          {[...Array(4)].map((_, i) => (
            <TransformationCard key={i + 1} />
          ))}
        </ScrollView>

        <BackButton />
      </SkeletonContainer>
    </ScrollView>
  );
};

export default SkeletonCharacterDetail;
