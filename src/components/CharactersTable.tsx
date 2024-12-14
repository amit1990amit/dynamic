import React, { useCallback } from "react";
import {
  Table,
  TableBody,
} from "@mui/material";
import CharactersTableHeader from './CharactersTableHeader'
import CharactersTableRow from './CharactersTableRow'
import CharactersTablePagination from './CharactersTablePagination'
import { useTable } from '../hooks/useTable'
import { Character } from '../types'


type Props = {
  data: Character[];
  total: number;
  page: number;
  setPage: (page: number) => void;
  isFetching: boolean;
}

const CharactersTable = ({ data, total, page, setPage, isFetching }: Props) => {
  const { order, orderBy, sortedData, totalPages, handleSort } = useTable({
    data,
    total,
  });

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  },[setPage])

  return (
    <div className="table-container">
      {isFetching && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <Table className="table">
        <CharactersTableHeader
          handleSort={handleSort}
          order={order}
          orderBy={orderBy}
        />
        <TableBody>
          {sortedData.map((character) => (
            <CharactersTableRow key={character.url} character={character}></CharactersTableRow>
          ))}
        </TableBody>
      </Table>
      <CharactersTablePagination
        totalPages={totalPages}
        page={page}
        handlePageChange={handlePageChange}

      />
    </div>
  );
};

export default CharactersTable;
