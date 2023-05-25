import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS_F, calcSubPrice, totalSumFunc } from "./helpers";

import { notify } from "../mainComponents/Toastify";

const favoriteContext = createContext();
export const useFavorite = () => useContext(favoriteContext);

const INIT_STATE = {
  favorite: {
    products: [],
    totalPrice: 0,
  },
  favoriteLength: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS_F.favorite:
      return { ...state, favorite: action.payload };
    case ACTIONS_F.favoriteLength: {
      return { ...state, favoriteLength: action.payload };
    }
    default:
      return state;
  }
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("favorite"));
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

const FavoriteContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function getFavorite() {
    const data = getDataFromLS();
    let len = data.products.reduce((acc, item) => acc + +item.count, 0);

    dispatch({
      type: ACTIONS_F.favorite,
      payload: data,
    });
    dispatch({
      type: ACTIONS_F.favoriteLength,
      payload: len,
    });
  }

  function addProductToFavorite(product) {
    let data = getDataFromLS();

    const isInFavorite = data.products.some((item) => item.id === product.id);

    if (isInFavorite) {
      deleteFromFavorite(product.id);
      return;
    } else {
      data.products.push({ ...product, count: 1, subPrice: +product.price });
    }
    data.totalPrice = totalSumFunc(data.products);
    localStorage.setItem("favorite", JSON.stringify(data));
    getFavorite();

    notify("SECCESSFULLY ADDED TO FAVORITES");
  }

  function changeProductCount(count, id) {
    const favorite = getDataFromLS();

    favorite.products = favorite.products.map((product) => {
      if (product.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    favorite.totalPrice = totalSumFunc(favorite.products);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  function deleteFromFavorite(id) {
    const data = getDataFromLS();
    data.products = data.products.filter((item) => item.id !== id);

    data.totalPrice = totalSumFunc(data.products);
    localStorage.setItem("favorite", JSON.stringify(data));
    getFavorite();
    notify("SECCESSFULLY REMOVED FROM FAVORITES");
  }

  function isAlreadyInFavorite(id) {
    const data = getDataFromLS();
    const isInFavorite = data.products.some((item) => item.id === id);
    return isInFavorite;
  }

  const values = {
    favorite: state.favorite,
    favoriteLength: state.favoriteLength,
    getFavorite,
    addProductToFavorite,
    changeProductCount,
    deleteFromFavorite,
    isAlreadyInFavorite,
  };

  return (
    <favoriteContext.Provider value={values}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContexProvider;
