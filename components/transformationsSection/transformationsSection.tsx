import { CharacterDetailStyles } from "@/components/cardCharacterDetail/characterDetailStyle";
import { Transformation } from "@/types/getCharacters";
import React, { useState } from "react";
import { FlatList, Modal, TouchableOpacity, View } from "react-native";

export const TransformationsSection = ({
  transformations,
}: {
  transformations: Transformation[];
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openImageModal = (imageUri: string) => {
    if (!imageUri) {
      console.warn("No image URI provided");
      return;
    }
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <CharacterDetailStyles.SectionTitle>
        Transformaciones
      </CharacterDetailStyles.SectionTitle>

      <FlatList
        data={transformations}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CharacterDetailStyles.TransformationCard
            onPress={() => openImageModal(item.image)}
            activeOpacity={0.9}
          >
            <CharacterDetailStyles.TransformationImage
              source={{ uri: item.image, cache: "force-cache" }}
            />

            <CharacterDetailStyles.TransformationName>
              {item.name}
            </CharacterDetailStyles.TransformationName>
            <CharacterDetailStyles.KiText>
              KI: {item.ki}
            </CharacterDetailStyles.KiText>
          </CharacterDetailStyles.TransformationCard>
        )}
        contentContainerStyle={{
          paddingVertical: 12,
          paddingHorizontal: 8,
        }}
      />

      {/* Modal mejorado para vista ampliada */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={closeImageModal}
      >
        <CharacterDetailStyles.ModalOverlay>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            activeOpacity={1}
            onPress={closeImageModal}
          >
            {selectedImage && (
              <CharacterDetailStyles.EnlargedImage
                source={{ uri: selectedImage }}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        </CharacterDetailStyles.ModalOverlay>
      </Modal>
    </View>
  );
};
