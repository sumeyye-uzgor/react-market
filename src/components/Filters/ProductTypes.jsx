import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-styled-components/dist/tailwind";
import { selectTypes } from "../../redux/selectors";
import { setItemType } from "../../redux/actions";
const TypeButton = tw.div`
    px-3 py-1 font-light text-lg rounded-sm cursor-pointer
    ${(props) =>
      props.isactive === "true"
        ? "bg-primary-blue text-primary-white"
        : "bg-primary-white text-primary-blue"}
`;
const ProductTypes = () => {
  const types = useSelector(selectTypes);
  const dispatch = useDispatch();
  return (
    <>
      {types.map((type, idx) => (
        <TypeButton
          isactive={type.isActive.toString()}
          key={idx}
          onClick={() => dispatch(setItemType(type))}
        >
          {type.label}
        </TypeButton>
      ))}
    </>
  );
};

export default ProductTypes;
