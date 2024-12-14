import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchCharacters } from "../services/api";
import CharactersTable from "../components/CharactersTable";
import Spinner from '../components/Spinner'

const CharactersListPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, isFetching } = useQuery(
    ["characters", page, search],
    () => fetchCharacters(page, search),
    {
      keepPreviousData: true,
      staleTime: Infinity // prevent api request for catched value, wont use it in most cases
    }
  );

  const handlePageChange = (newPage: number) => {
    setSearch("");
    setPage(newPage);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  if (isLoading) return <Spinner/>
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={handleSearchChange}
      />
      
        <CharactersTable
          data={data?.results || []}
          total={data?.count || 0}
          page={page}
          setPage={handlePageChange}
          isFetching={isFetching}
        />
      
    </div>
  );
};

export default CharactersListPage;
