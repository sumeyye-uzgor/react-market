import { toast } from "react-toastify";
import { types } from "./types";

const INITIAL_STATE = {
  products: [],
  companies: [],
  isLoading: false,
  cart: [],
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
        products: action.payload.products,
        companies: action.payload.companies,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
