import types from "./types";
import axios from "axios";

export const fetchDataStart = () => ({
  type: types.FETCH_DATA_START,
});
export const fetchDataFailure = () => ({
  type: types.FETCH_DATA_FAILURE,
});
export const fetchDataSuccess = ({ products, companies }) => ({
  type: types.FETCH_DATA_SUCCESS,
  payload: { products, companies },
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
      dispatch(fetchDataSuccess({ companies, products }));
    } catch (error) {
      dispatch(fetchDataFailure());
    }
  };
};
