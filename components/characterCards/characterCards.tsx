import { useCharacters } from "@/hooks/useCharacters";
import { Character } from "@/types/getCharacters";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, ListRenderItem, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CharacterCardStyles } from "./characterCardStyles";
import SkeletonCharacterCard from "./skeletonCharacterCard";
export const CharacterCards = () => {
  //Hooks
  const { getCharacters, isLoading } = useCharacters();
  const insets = useSafeAreaInsets();
  //Local states
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchCharacters = useCallback(async () => {
    if (isFetchingMore || !hasMore) return;

    setIsFetchingMore(true);
    const data = await getCharacters({ page, limit: 10, name: searchQuery });

    if (data.items.length > 0) {
      setCharacters((prev) => [...prev, ...data.items]);
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }

    setIsFetchingMore(false);
  }, [getCharacters, page, isFetchingMore, hasMore, searchQuery]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const renderItem: ListRenderItem<Character> = ({ item }) => (
    <CharacterCardStyles.Card activeOpacity={0.4}>
      <Link href={`/characterDetails/${item.id}`}>
        <CharacterCardStyles.ContentWrapper>
          <CharacterCardStyles.NameContainer>
            <CharacterCardStyles.CharacterName>
              {item.name}
            </CharacterCardStyles.CharacterName>
          </CharacterCardStyles.NameContainer>
          <CharacterCardStyles.CharacterImage source={{ uri: item.image }} />
        </CharacterCardStyles.ContentWrapper>
      </Link>
    </CharacterCardStyles.Card>
  );

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <CharacterCardStyles.SearchContainer>
        <CharacterCardStyles.SearchInput
          placeholder="Buscar personaje..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <CharacterCardStyles.SearchIcon onPress={() => {}}>
          <Feather name="search" size={20} color="white" />
        </CharacterCardStyles.SearchIcon>
      </CharacterCardStyles.SearchContainer>

      {characters?.length === 0 && isLoading ? (
        <SkeletonCharacterCard count={3} />
      ) : (
        <CharacterCardStyles.ListContainer
          data={characters}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          onEndReached={fetchCharacters}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingMore ? (
              <ActivityIndicator
                size="large"
                color="#888"
                style={{ margin: 20 }}
              />
            ) : null
          }
        />
      )}
    </View>
  );
};
