import types from "./types";
import axios from "axios";

export const setCurrentPage = (pageNumber) => ({
  type: types.SET_CURRENT_PAGE,
  payload: pageNumber,
});
export const setItemType = (type) => ({
  type: types.SET_ITEM_TYPE,
  payload: type,
});
export const sortProducts = (sortType) => ({
  type: types.SORT_PRODUCTS,
  payload: sortType,
});
export const setFilterArray = ({ label, array }) => ({
  type: types.SET_FILTER_ARRAY,
  payload: { label, array },
});
export const setFilters = ({ companiesArray, tagsArray, typesArray }) => ({
  type: types.SET_FILTERS,
  payload: { companiesArray, tagsArray, typesArray },
});
export const fetchDataStart = () => ({
  type: types.FETCH_DATA_START,
});
export const fetchDataFailure = (error) => ({
  type: types.FETCH_DATA_FAILURE,
  payload: error,
});
export const fetchDataSuccess = ({ products, companies, totalProducts }) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: {
      products,
      companies,
      totalProducts,
      tags: products
        .reduce((tagArray, product) => {
          return [...tagArray, ...product.tags];
        }, [])
        .filter((v, i, a) => a.indexOf(v) === i),
      types: products
        .reduce((typeArray, product) => {
          return [...typeArray, product.itemType];
        }, [])
        .filter((v, i, a) => a.indexOf(v) === i)
        .map((type) => ({ label: type, isActive: true })),
      filteredProducts: products,
    },
  };
};
export const fetchDataStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchDataStart());
    try {
      //change this to env process
      const { data: products } = await axios.get(
        `http://localhost:3004/products`
      );
      const { data: companies } = await axios.get(
        "http://localhost:3004/companies"
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
