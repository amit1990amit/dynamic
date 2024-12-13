import axios from "axios";

const API_URL = "https://swapi.dev/api";

export const fetchCharacters = async (page: number, search?: string) => {
  const response = await axios.get(`${API_URL}/people/`, {
    params: { page, search },
  });
  return response.data;
};

export const fetchCharacterDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/people/${id}/`);
  return response.data;
};
