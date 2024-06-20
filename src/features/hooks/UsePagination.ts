import { useState } from 'react';

type UsePaginationProps = {
  totalPages: number;
  initialPage?: number;
  maxPagesToShow?: number;
};

type UsePaginationResult = {
  currentPage: number;
  pageNumbers: number[];
  handlePageChange: (page: number) => void;
  handleNextPage: () => void;
  handleFirstPage: () => void;
};

const usePagination = ({
  totalPages,
  initialPage = 1,
  maxPagesToShow = 5,
}: UsePaginationProps): UsePaginationResult => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const getPageNumbers = (): number[] => {
    const pageNumbers = [];
    const half = Math.floor(maxPagesToShow / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, maxPagesToShow);
    } else if (currentPage + half >= totalPages) {
      start = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  return {
    currentPage,
    pageNumbers: getPageNumbers(),
    handlePageChange,
    handleNextPage,
    handleFirstPage,
  };
};

export default usePagination;
