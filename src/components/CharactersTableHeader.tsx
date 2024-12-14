import React from "react";
import {
  TableHead,
  TableRow,
} from "@mui/material";
import CharactersTableHeaderCell from './CharactersTableHeaderCell'
import { HEADER_DATA_BY_COLUMN } from '../consts'


type Props = {
  handleSort: (property: string) => void;
  orderBy: string;
  order: "desc" | "asc" | undefined;
}

const CharactersTableHeader = ({ handleSort, orderBy, order }: Props) => {

  return (
    <>
        <TableHead className="table-head">
          <TableRow>
            {HEADER_DATA_BY_COLUMN.map((data) => {
              return <CharactersTableHeaderCell
                key={data.label}
                label={data.label}
                propertyName={data.propertyName}
                handleSort={handleSort}
                orderBy={orderBy}
                order={order}

              />
            })}
          </TableRow>
        </TableHead>
    </>
  );
};

export default CharactersTableHeader;
