import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { selectProducts, selectIsLoading } from "../redux/selectors";

// import axios from "axios";
const ProductsContainer = () => {
  const skeletonArray = Array(16).fill("");
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="w-full bg-bg-white mt-5 grid grid-cols-4 gap-7 p-4">
      {isLoading
        ? skeletonArray.map((item, id) => (
            <ProductCard key={id} isLoading={true} />
          ))
        : products
            .slice(0, 16)
            .map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
    </div>
  );
};

export default ProductsContainer;
