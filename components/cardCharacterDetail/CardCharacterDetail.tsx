import { CharacterDetailStyles } from "@/components/cardCharacterDetail/characterDetailStyle";
import { CharacterDetail } from "@/types/getCharacters";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { TransformationsSection } from "../transformationsSection/transformationsSection";
import SkeletonCharacterDetail from "./SkeletonCharacterDetail";

export const CardCharacterDetail = ({
  characterDetails,
  loading,
}: {
  characterDetails: CharacterDetail;
  loading: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      {!loading ? (
        <ScrollView
          contentContainerStyle={{ padding: 16, backgroundColor: "#0a0a0a" }}
        >
          <CharacterDetailStyles.CharacterImage
            source={{ uri: characterDetails.image }}
            resizeMode="cover"
          />

          <CharacterDetailStyles.Title>
            {characterDetails.name}
          </CharacterDetailStyles.Title>
          <CharacterDetailStyles.Label>
            <CharacterDetailStyles.Bold>Raza 4:</CharacterDetailStyles.Bold>{" "}
            {characterDetails.race}
          </CharacterDetailStyles.Label>
          <CharacterDetailStyles.Label>
            <CharacterDetailStyles.Bold>Género:</CharacterDetailStyles.Bold>{" "}
            {characterDetails.gender}
          </CharacterDetailStyles.Label>
          <CharacterDetailStyles.Label>
            <CharacterDetailStyles.Bold>Afiliación:</CharacterDetailStyles.Bold>{" "}
            {characterDetails.affiliation}
          </CharacterDetailStyles.Label>
          <CharacterDetailStyles.Label>
            <CharacterDetailStyles.Bold>KI:</CharacterDetailStyles.Bold>{" "}
            {characterDetails.ki}
          </CharacterDetailStyles.Label>
          <CharacterDetailStyles.Label>
            <CharacterDetailStyles.Bold>Máx KI:</CharacterDetailStyles.Bold>{" "}
            {characterDetails.maxKi}
          </CharacterDetailStyles.Label>

          <CharacterDetailStyles.SectionTitle>
            Descripción
          </CharacterDetailStyles.SectionTitle>
          <CharacterDetailStyles.Description>
            {characterDetails.description}
          </CharacterDetailStyles.Description>

          <CharacterDetailStyles.SectionTitle>
            Planeta de Origen
          </CharacterDetailStyles.SectionTitle>
          <CharacterDetailStyles.PlanetContainer>
            <CharacterDetailStyles.PlanetImage
              source={{ uri: characterDetails.originPlanet.image }}
            />
            <CharacterDetailStyles.PlanetTextContainer>
              <CharacterDetailStyles.Label>
                <CharacterDetailStyles.Bold>
                  {characterDetails.originPlanet.name}
                </CharacterDetailStyles.Bold>
              </CharacterDetailStyles.Label>
              <CharacterDetailStyles.PlanetDescription>
                {characterDetails.originPlanet.description}
              </CharacterDetailStyles.PlanetDescription>
            </CharacterDetailStyles.PlanetTextContainer>
          </CharacterDetailStyles.PlanetContainer>

          {characterDetails.transformations?.length > 0 && (
            <TransformationsSection
              transformations={characterDetails.transformations}
            />
          )}

          <CharacterDetailStyles.BackButton onPress={() => router.back()}>
            <CharacterDetailStyles.BackButtonText>
              ← Volver
            </CharacterDetailStyles.BackButtonText>
          </CharacterDetailStyles.BackButton>
        </ScrollView>
      ) : (
        <SkeletonCharacterDetail />
      )}
    </>
  );
};
