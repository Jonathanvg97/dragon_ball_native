import { CardCharacterDetail } from "@/components/cardCharacterDetail/CardCharacterDetail";
import { useCharacters } from "@/hooks/useCharacters";
import { CharacterDetail } from "@/types/getCharacters";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function CardDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isLoadingDetail, getDetail } = useCharacters();
  //
  const [characterDetails, setCharacterDetails] =
    useState<CharacterDetail | null>(null);
  //
  useEffect(() => {
    if (!id) return;
    const fetchDetail = async () => {
      const response = await getDetail({ id });
      setCharacterDetails(response);
    };

    fetchDetail();
  }, [getDetail, id]);

  if (!characterDetails) {
    return null;
  }

  return (
    <CardCharacterDetail
      characterDetails={characterDetails}
      loading={isLoadingDetail}
    />
  );
}
