import ProductCard from "./ProductCard";
import products from "../data/items.json";
const ProductContainer = () => {
  return (
    <div className="w-full bg-bg-white mt-5 grid grid-cols-4 gap-7 p-4">
      {products.slice(0, 16).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
