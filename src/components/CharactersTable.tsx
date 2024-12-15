import React from "react";
import {
  Table,
  TableBody,
} from "@mui/material";
import CharactersTableHeader from './CharactersTableHeader'
import CharactersTableRow from './CharactersTableRow'
import CharactersTablePagination from './CharactersTablePagination'
import Spinner from "./Spinner";
import { useTable } from '../hooks/useTable'
import { Character } from '../types'
import { SPINNER_OVERLAY } from '../consts'


type Props = {
  data: Character[];
  total: number;
  page: number;
  handlePageChange: (page: number) => void;
  isFetching: boolean;
}

const CharactersTable = ({ data, total, page, handlePageChange, isFetching }: Props) => {
  const { order, orderBy, sortedData, totalPages, handleSort } = useTable({
    data,
    total,
  });

  // const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value);
  // },[setPage])

  return (
    <div className="table-container">
      {isFetching && <Spinner spinnerContainerClass={SPINNER_OVERLAY}/>}
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
