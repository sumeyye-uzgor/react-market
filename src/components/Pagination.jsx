const Pagination = ({ itemsTotal, itemsPerPage, handleChange }) => {
  const totalPages = parseInt(itemsTotal / itemsPerPage);
  const numArray = Array(totalPages)
    .fill()
    .map((x, i) => i + 1);
  const pageArray =
    totalPages > 9 ? [1, 2, 3, 4, "..."].concat(numArray.splice(-4)) : numArray;
  return (
    <div className="w-full mt-5 flex flex-row text-base font-medium justify-around">
      <div className="mr-2 cursor-pointer">&larr; Prev</div>
      {pageArray.map((page) => (
        <div
          className="bg-primary-blue px-2 py-1 rounded-sm cursor-pointer"
          key={page}
        >
          {page}
        </div>
      ))}

      <div className="ml-2 cursor-pointer">Next &rarr;</div>
    </div>
  );
};

export default Pagination;
