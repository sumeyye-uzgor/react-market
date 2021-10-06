import { toast } from "react-toastify";
import { sortProducts } from "./actions";
import { types } from "./types";

const INITIAL_STATE = {
  products: [],
  companies: [],
  isLoading: false,
  cart: [],
  currentPage: 1,
  totalProducts: 1,
  filteredProducts: [],
  tags: [],
  types: [],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_DATA_START:
      return { ...state, isLoading: true };
    case types.FETCH_DATA_FAILURE:
      toast.error(action.payload);
      return { ...state, isLoading: false };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case types.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
        totalProducts: action.payload.length,
        tags: action.payload
          .reduce((tagArray, product) => {
            return [...tagArray, ...product.tags];
          }, [])
          .filter((v, i, a) => a.indexOf(v) === i),
        types: action.payload
          .reduce((typeArray, product) => {
            return [...typeArray, product.itemType];
          }, [])
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((type) => ({ label: type, isActive: true })),
      };
    case types.SET_ITEM_TYPE:
      const updatedTypes = state.types.map((type) =>
        type.label === action.payload.label
          ? { ...type, isActive: !type.isActive }
          : { ...type }
      );
      const filteredTypes =
        updatedTypes.filter((type) => type.isActive === true).length > 0
          ? updatedTypes
          : state.products
              .reduce((typeArray, product) => {
                return [...typeArray, product.itemType];
              }, [])
              .filter((v, i, a) => a.indexOf(v) === i)
              .map((type) => ({ label: type, isActive: true }));
      const activeTypes = filteredTypes.map((type) =>
        type.isActive ? type.label : null
      );
      const filteredProductsByType = state.products.filter((product) =>
        activeTypes.includes(product.itemType)
      );
      return {
        ...state,
        filteredProducts: filteredProductsByType,
        totalProducts: filteredProductsByType.length,
        tags: filteredProductsByType
          .reduce((tagArray, product) => {
            return [...tagArray, ...product.tags];
          }, [])
          .filter((v, i, a) => a.indexOf(v) === i),
        types: filteredTypes,
      };
    case types.SORT_PRODUCTS:
      const sortFunction = (sortLabel) => {
        switch (sortLabel) {
          case "highToLow":
            return (a, b) => b.price - a.price;
          case "lowToHigh":
            return (a, b) => a.price - b.price;
          case "oldToNew":
            return (a, b) => a.added - b.added;
          case "newToOld":
            return (a, b) => b.added - a.added;
          default:
            return () => {};
        }
      };
      const sortedProducts = [...state.filteredProducts];
      return {
        ...state,
        filteredProducts: sortedProducts.sort(sortFunction(action.payload)),
      };
    default:
      return state;
  }
};

export default reducer;
