import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import styled from "styled-components/native";

interface SkeletonCharacterCardProps {
  count?: number;
}
const Card = styled.View`
  margin-bottom: 24px;
  background-color: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  height: 350px;
  padding: 16px;
  justify-content: space-between;
`;

const SkeletonCharacterCard: React.FC<SkeletonCharacterCardProps> = ({
  count = 6,
}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index + 1}>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            shimmerStyle={{
              width: "50%",
              height: 20,
              borderRadius: 8,
              marginBottom: 16,
            }}
            location={[0.3, 0.5, 0.7]}
            shimmerColors={["#2e2e2e", "#444", "#2e2e2e"]}
          />

          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            shimmerStyle={{
              width: "100%",
              height: 260,
              borderRadius: 12,
            }}
            location={[0.3, 0.5, 0.7]}
            shimmerColors={["#2e2e2e", "#444", "#2e2e2e"]}
          />
        </Card>
      ))}
    </ScrollView>
  );
};

export default SkeletonCharacterCard;
