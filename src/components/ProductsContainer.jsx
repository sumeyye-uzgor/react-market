import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import {
  selectFilteredProducts,
  selectIsLoading,
  selectCurrentPage,
} from "../redux/selectors";

const ProductsContainer = () => {
  const currentPage = useSelector(selectCurrentPage);
  const skeletonArray = Array(16).fill("");
  const filteredProducts = useSelector(selectFilteredProducts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="w-full bg-bg-white mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4">
      {isLoading
        ? skeletonArray.map((item, id) => (
            <ProductCard key={id} isLoading={true} />
          ))
        : filteredProducts
            .slice((currentPage - 1) * 16, currentPage * 16)
            .map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
    </div>
  );
};

export default ProductsContainer;
