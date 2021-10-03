import Skeleton from "react-loading-skeleton";
import tw from "tailwind-styled-components";

const Card = tw.div`
    flex
    flex-col
    justify-between
    h-96
    text-xl
    w-full
`;
const ImageContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    h-60
    border-border-gray
    border
    rounded-xl
`;
const Image = tw.div`
    bg-bg-gray
    h-44
    w-10/12
    border
    rounded-lg
`;
const Price = tw.div`
    flex
    flex-row
    text-lg
    text-primary-blue
    mt-2
`;
const Title = tw.div`
    flex
    flex-row
    text-text-black
    mt-1
    font-medium
`;
const Button = tw.div`
    text-center
    text-primary-white
    rounded-sm
    font-normal
    bg-primary-blue
    mt-2
    py-1
    px-3
`;
const ProductCard = ({ product, isLoading }) => {
  return (
    <Card>
      <div className="flex flex-col">
        {isLoading ? (
          <Skeleton
            width={"100"}
            height={"200"}
            className="w-full h-60 bg-bg-gray"
          />
        ) : (
          <ImageContainer>
            <Image />
          </ImageContainer>
        )}

        {isLoading ? <Skeleton /> : <Price>&#x20BA; {product.price}</Price>}
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          <Title>{product.name}</Title>
        )}
      </div>
      {isLoading ? <Skeleton /> : <Button>Add</Button>}
    </Card>
  );
};

export default ProductCard;
