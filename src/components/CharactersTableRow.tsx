import React from "react";
import {
  TableCell,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Character } from '../types'
import { getCharacterLink } from './utils'

type Props = {
  character: Character;
}

const CharactersTableRow = ({ character } : Props) => {
  const characterUrl = getCharacterLink(character.url)

  return (
    <TableRow >
      <TableCell>
        <Link to={characterUrl}>
          {character.name}
        </Link>
      </TableCell>
      <TableCell>{character.birth_year}</TableCell>
      <TableCell>{character.gender}</TableCell>
  </TableRow>
  );
};

export default React.memo(CharactersTableRow);
