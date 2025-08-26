import { Character } from "@/types/getCharacters";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

const ListContainer = styled(FlatList).attrs<FlatListProps<Character>>(() => ({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 300,
  },
}))<FlatListProps<Character>>``;

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #bf4f74;
  margin-bottom: 16px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  align-self: center;
  width: 80%;
`;

const SearchInput = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  flex: 1;
  border-radius: 8px;
  padding: 0 12px;
  color: #fff;
  background-color: #2a2a2a;
`;

export const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  top: 8px;
  z-index: 1;
`;

const Card = styled.TouchableOpacity`
  margin-bottom: 24px;
  background-color: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  height: 350px;
`;

const ContentWrapper = styled.View`
  flex-direction: row;
  height: 100%;
`;

const NameContainer = styled.View`
  width: 80px; /* Ancho fijo para el contenedor del nombre */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3); /* Fondo semitransparente */
`;

const CharacterName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  transform: rotate(270deg);
  text-shadow: 5px 5px 4px rgba(245, 115, 8, 1);
  color: #fff;
  letter-spacing: 3px;
  width: 300px;
`;

const CharacterImage = styled.Image`
  width: 80%;
  height: 100%;
  object-fit: contain;
`;

export const CharacterCardStyles = {
  Title,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ListContainer,
  Card,
  ContentWrapper,
  NameContainer,
  CharacterImage,
  CharacterName,
};
