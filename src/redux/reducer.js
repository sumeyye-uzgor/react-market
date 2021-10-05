import { toast } from "react-toastify";
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
          .reduce((product, tagArray) => {
            return [...tagArray, ...product.tags];
          }, [])
          .filter((v, i, a) => a.indexOf(v) === i),
      };
    default:
      return state;
  }
};

export default reducer;
