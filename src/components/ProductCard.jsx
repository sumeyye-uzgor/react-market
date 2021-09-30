import tw from "tailwind-styled-components";

const Card = tw.div`
    flex
    flex-col
    h-96
    text-xl
    font-semibold
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
    rounded-lg
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
`;
const Button = tw.div`
    text-center
    text-primary-white
    rounded-md
    bg-primary-blue
    mt-2
    py-1
    px-3
`;
const ProductCard = () => {
  return (
    <Card>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <Price>tl 48874</Price>
      <Title>Deneme</Title>
      <Button>Add</Button>
    </Card>
  );
};

export default ProductCard;
