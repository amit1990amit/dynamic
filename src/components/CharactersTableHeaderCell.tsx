import React from "react";
import {
  TableCell,
  TableSortLabel,
} from "@mui/material";


type Props = {
  handleSort: (property: string) => void;
  orderBy: string;
  order: "desc" | "asc" | undefined;
  label: string;
  propertyName: string;
}

const CharactersTableHeaderCell = ({ handleSort, orderBy, order, label, propertyName }: Props) => {
  return (
            <TableCell>
              <TableSortLabel
                active={orderBy === propertyName}
                direction={orderBy === propertyName ? order : "asc"}
                onClick={() => handleSort(propertyName)}
              >
                {label}
              </TableSortLabel>
            </TableCell>
  );
};

export default CharactersTableHeaderCell;
