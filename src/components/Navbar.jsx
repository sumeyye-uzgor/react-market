import tw from "tailwind-styled-components";
import Logo from "../assets/Logo.png";
import ShoppingBag from "../assets/shopping-bag.svg";
const NavbarComponent = tw.div`
h-16 sticky top-0 left-0 w-full bg-primary-blue text-primary-white z-20 flex flex-row justify-center relative
`;
const CartIcon = tw.div`
bg-bg-darkBlue h-16 absolute right-36 top-0 px-5 flex flex-row items-center
`;
const PriceText = tw.span`
text-text-white ml-5 flex flex-row items-center
`;
const Navbar = () => {
  return (
    <NavbarComponent>
      <img src={Logo} alt="logo" className="w-40 h-16 self-center" />
      <CartIcon>
        <img src={ShoppingBag} width="20px" height="20px" alt="shopping-bag" />
        <PriceText> &#x20BA; price</PriceText>
      </CartIcon>
    </NavbarComponent>
  );
};

export default Navbar;
