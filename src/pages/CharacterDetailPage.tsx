import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCharacterDetails } from "../services/api";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(["characterDetail", id], () =>
    fetchCharacterDetails(id || "")
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back to List</button>
      <h1>{data.name}</h1>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Skin Color: {data.skin_color}</p>
      <p>Eye Color: {data.eye_color}</p>
      <p>Birth Year: {data.birth_year}</p>
      <p>Gender: {data.gender}</p>
    </div>
  );
};

export default CharacterDetailPage;