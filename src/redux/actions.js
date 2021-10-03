import types from "./types";
import axios from "axios";

export const setCurrentPage = (pageNumber) => ({
  type: types.SET_CURRENT_PAGE,
  payload: pageNumber,
});
export const fetchDataStart = () => ({
  type: types.FETCH_DATA_START,
});
export const fetchDataFailure = (error) => ({
  type: types.FETCH_DATA_FAILURE,
  payload: error,
});
export const fetchDataSuccess = ({ products, companies, totalProducts }) => ({
  type: types.FETCH_DATA_SUCCESS,
  payload: { products, companies, totalProducts },
});
export const fetchDataStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchDataStart());
    try {
      //change this to env process
      const { data: products } = await axios.get(
        `http://localhost:3001/products`
      );
      const { data: companies } = await axios.get(
        "http://localhost:3001/companies"
      );
      dispatch(
        fetchDataSuccess({
          companies,
          products,
          totalProducts: products.length,
        })
      );
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
