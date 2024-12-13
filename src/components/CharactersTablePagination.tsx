import React from "react";
import Pagination from "@mui/material/Pagination";


type Props = {
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  totalPages: number;
  page: number;
}

const CharactersTablePagination = ({ totalPages, page, handlePageChange }: Props) => {

  return (
    <Pagination
    count={totalPages}
    page={page}
    onChange={handlePageChange}
    color="primary"
    size="large"
    siblingCount={1}
    boundaryCount={1}
  />
  );
};

export default React.memo(CharactersTablePagination);
