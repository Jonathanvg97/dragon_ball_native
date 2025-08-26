import { getALLCharacters, getDetailCharacter } from "@/services/getCharacters";
import { CharacterDetail, CharactersResponse } from "@/types/getCharacters";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Toast } from "toastify-react-native";

export const useCharacters = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(false);

  const getCharacters = useCallback(
    async ({
      page = 1,
      limit = 10,
      name,
    }: {
      page: number;
      limit?: number;
      name?: string;
    }): Promise<CharactersResponse | { items: [] }> => {
      setIsLoading(true);
      try {
        const response = await getALLCharacters({
          page,
          limit,
          name,
        });

        return response;
      } catch (error) {
        console.error("Error en useCharacters.getCharacters:", error);
        return { items: [] };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const getDetail = useCallback(
    async ({ id }: { id: string }): Promise<CharacterDetail> => {
      setIsLoadingDetail(true);
      try {
        const response = await getDetailCharacter({ id });
        if (!response) {
          Toast.error("Error al obtener el personaje");
          router.back();
        }
        return response;
      } catch (error) {
        console.error("Error en useCharacters.getDetailCharacter:", error);
        Toast.error("Error al obtener el personaje");
        router.back();
        throw error;
      } finally {
        setIsLoadingDetail(false);
      }
    },
    [router]
  );
  return {
    getCharacters,
    isLoading,
    getDetail,
    isLoadingDetail,
  };
};
