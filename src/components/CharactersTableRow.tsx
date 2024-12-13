import React from "react";
import {
  TableCell,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Character } from '../types'


type Props = {
  character: Character;
}

const CharactersTableRow: React.FC<Props> = ({ character } : Props) => {

  return (
    <TableRow >
      <TableCell>
        <Link to={`/character/${character.url.split("/").slice(-2, -1)[0]}`}>
          {character.name}
        </Link>
      </TableCell>
      <TableCell>{character.birth_year}</TableCell>
      <TableCell>{character.gender}</TableCell>
  </TableRow>
  );
};

export default React.memo(CharactersTableRow);
