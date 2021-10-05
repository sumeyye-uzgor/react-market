import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/actions";
import { selectCurrentPage } from "../redux/selectors";

const Pagination = ({ itemsTotal, itemsPerPage }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = Math.ceil(parseInt(itemsTotal / itemsPerPage));
  const halfTotal = parseInt(totalPages / 2);
  const [pageArray, setPageArray] = useState([]);
  useEffect(() => {
    if (totalPages > 9) {
      if (currentPage < halfTotal) {
        setPageArray([
          currentPage,
          currentPage + 1,
          currentPage + 2,
          currentPage + 3,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ]);
      } else {
        const difference = totalPages - currentPage;
        if (difference > 4) {
          setPageArray([
            1,
            2,
            3,
            4,
            "...",
            currentPage,
            currentPage + 1,
            currentPage + 2,
            currentPage + 3,
          ]);
        } else {
          setPageArray([
            1,
            2,
            3,
            4,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ]);
        }
      }
    } else {
      setPageArray(
        Array(totalPages)
          .fill()
          .map((x, i) => i + 1)
      );
    }
  }, [currentPage, halfTotal, totalPages]);

  return (
    <div className="w-full mt-5 flex flex-row text-base font-medium justify-around">
      <div
        className="mr-2 cursor-pointer"
        onClick={() =>
          currentPage !== 1 && dispatch(setCurrentPage(currentPage - 1))
        }
      >
        &larr; Prev
      </div>
      {pageArray.map((page) => (
        <div
          className={`bg-primary-blue px-2 py-1 rounded-sm ${
            page !== "..." ? "cursor-pointer" : "cursor-default"
          }`}
          key={page}
          onClick={() =>
            page !== "..." && dispatch(setCurrentPage(parseInt(page)))
          }
        >
          {page}
        </div>
      ))}

      <div
        className="ml-2 cursor-pointer"
        onClick={() =>
          currentPage !== totalPages &&
          dispatch(setCurrentPage(currentPage + 1))
        }
      >
        Next &rarr;
      </div>
    </div>
  );
};

export default Pagination;
