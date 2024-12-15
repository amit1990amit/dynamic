import React from "react";
import Pagination from "@mui/material/Pagination";


type Props = {
  handlePageChange: (page: number) => void;
  totalPages: number;
  page: number;
}

const CharactersTablePagination = ({ totalPages, page, handlePageChange }: Props) => {

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handlePageChange(value);
  }

  return (
    <Pagination
      className="table-pagination"
      count={totalPages}
      page={page}
      onChange={onPageChange}
      color="primary"
      size="large"
      siblingCount={1}
      boundaryCount={1}
  />
  );
};

export default React.memo(CharactersTablePagination);
