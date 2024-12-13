import { useState, useMemo, useCallback } from "react";
import { Character } from '../types'
import { ROWS_PER_PAGE } from '../consts'


type UseTableProps = {
  data: Character[];
  total: number;
}

export const useTable = ({ data, total }: UseTableProps) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("name");

  const handleSort = useCallback((property: string) => {
    setOrder((prevOrder) => (orderBy === property && prevOrder === "asc" ? "desc" : "asc"));
    setOrderBy(property);
  }, [orderBy]);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (a[orderBy as keyof Character] < b[orderBy as keyof Character]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[orderBy as keyof Character] > b[orderBy as keyof Character]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [data, order, orderBy]);

  const totalPages = Math.ceil(total / ROWS_PER_PAGE);

  return {
    order,
    orderBy,
    sortedData,
    totalPages,
    handleSort,
  };
};
