import styled from "styled-components/native";

// Title
const Title = styled.Text`
  font-size: 42px;
  font-weight: 800;
  color: #ffcc00;
  margin-top: 16px;
  text-align: center;
`;

// Label text
const Label = styled.Text`
  font-size: 16px;
  color: #dddddd;
  margin-top: 6px;
`;

const Bold = styled.Text`
  font-weight: 700;
  color: #ffffff;
`;

// Description
const Description = styled.Text`
  font-size: 15px;
  color: #bbbbbb;
  margin-top: 8px;
  line-height: 22px;
  text-align: justify;
`;

// Section titles
const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #00bcd4;
  margin-top: 28px;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-bottom-color: #00bcd4;
  padding-bottom: 4px;
`;

// Main Character Image
const CharacterImage = styled.Image`
  width: 100%;
  height: 340px;
  border-radius: 16px;
  margin-top: 12px;
  object-fit: contain;
`;

// Planet section
const PlanetContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
  background-color: #1c1c1c;
  padding: 12px;
  border-radius: 16px;
  gap: 12px;
`;

const PlanetImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  object-fit: contain;
`;

const PlanetTextContainer = styled.View`
  flex: 1;
`;

const PlanetDescription = styled.Text`
  font-size: 14px;
  color: #cccccc;
  margin-top: 4px;
  line-height: 20px;
`;

// Transformation cards
const TransformationCard = styled.TouchableOpacity`
  background-color: #262626;
  border-radius: 16px;
  padding: 12px;
  margin-right: 12px;
  align-items: center;
  width: 150px;
`;

const TransformationImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  object-fit: contain;
`;

const TransformationName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
`;

const KiText = styled.Text`
  font-size: 13px;
  color: #ff9800;
  margin-top: 4px;
`;

// Back button
const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
  background-color: #ff5722;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
`;

const BackButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const EnlargedImage = styled.Image`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;
export const CharacterDetailStyles = {
  Title,
  Label,
  Bold,
  Description,
  SectionTitle,
  CharacterImage,
  PlanetContainer,
  PlanetImage,
  PlanetTextContainer,
  PlanetDescription,
  TransformationCard,
  TransformationImage,
  TransformationName,
  KiText,
  BackButton,
  BackButtonText,
  ModalOverlay,
  ModalContainer,
  EnlargedImage,
};
