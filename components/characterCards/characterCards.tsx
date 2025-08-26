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
  const { getCharacters, isLoading } = useCharacters();
  const insets = useSafeAreaInsets();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchCharacters = useCallback(
    async (reset = false) => {
      // Si ya está cargando o no hay más y no es reset, no hacemos nada
      // Si hay búsqueda y no es reset, tampoco hacemos scroll infinito
      if (isFetchingMore || (!hasMore && !reset) || (searchQuery && !reset))
        return;

      setIsFetchingMore(true);

      const currentPage = reset ? 1 : page;
      const data = await getCharacters({
        page: currentPage,
        limit: 10,
        name: searchQuery || undefined,
      });

      if (reset) {
        setCharacters(data.items || data);
      } else {
        setCharacters((prev) => [...prev, ...data.items]);
      }

      if (!searchQuery) {
        // Solo actualiza paginación si no hay búsqueda
        if (data.items.length > 0) {
          setPage(currentPage + 1);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      } else {
        // Si es búsqueda, no hay más páginas
        setHasMore(false);
      }

      setIsFetchingMore(false);
    },
    [getCharacters, page, isFetchingMore, hasMore, searchQuery]
  );

  useEffect(() => {
    fetchCharacters(true);
  }, []);

  const handleSearch = () => {
    setPage(1);
    setHasMore(true);
    fetchCharacters(true);
  };

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

  useEffect(() => {
    if (!searchQuery || searchQuery === "") {
      fetchCharacters(true);
    }
  }, [searchQuery]);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      {/* Buscador */}
      <CharacterCardStyles.SearchContainer>
        <CharacterCardStyles.SearchInput
          placeholder="Buscar personaje..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <CharacterCardStyles.SearchIcon onPress={handleSearch}>
          <Feather name="search" size={20} color="white" />
        </CharacterCardStyles.SearchIcon>
      </CharacterCardStyles.SearchContainer>

      {/* Lista de personajes */}
      {characters?.length === 0 && isLoading ? (
        <SkeletonCharacterCard count={3} />
      ) : (
        <CharacterCardStyles.ListContainer
          data={characters}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          onEndReached={() => fetchCharacters()} // Scroll infinito solo si no hay búsqueda
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
