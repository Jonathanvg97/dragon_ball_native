import { CharacterDetail, CharactersResponse } from "@/types/getCharacters";
import { URL_BASE } from "@/utils/enviroment";

export const getALLCharacters = async ({
  page = 1,
  limit = 10,
  name,
}: {
  page: number;
  limit?: number;
  name?: string;
}): Promise<CharactersResponse> => {
  try {
    const params = {
      page: String(page),
      limit: String(limit),
      name: String(name),
    };
    const response = await fetch(
      `${URL_BASE}/characters?${new URLSearchParams(params)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CharactersResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const getDetailCharacter = async ({
  id,
}: {
  id: string;
}): Promise<CharacterDetail> => {
  try {
    const response = await fetch(`${URL_BASE}/characters/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CharacterDetail = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
