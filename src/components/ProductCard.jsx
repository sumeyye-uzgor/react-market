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
    w-44
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
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Card>
      <div className="flex flex-col">
        <ImageContainer>
          <Image />
        </ImageContainer>
        <Price>&#x20BA; {product.price}</Price>
        <Title>{product.name}</Title>
      </div>
      <Button>Add</Button>
    </Card>
  );
};

export default ProductCard;
