export const ACTIONS = {
  products: "products",
  oneProduct: "oneProduct",
  pageTotalCount: "pageTotalCount",
  user: "user",
  cart: "cart",
  cartLength: "cartLength",
};

export const ACTIONS_F = {
  products: "products",
  oneProduct: "oneProduct",
  pageTotalCount: "pageTotalCount",
  user: "user",
  favorite: "favorite",
  favoriteLength: "favoriteLength",
};

export const API = "http://localhost:8008/products";

export const LIMIT = 5;

export const ADMINS = ["admin@admin.com"];

export function totalSumFunc(products) {
  let data = products.reduce((acc, item) => acc + item.subPrice, 0);
  return data;
}

export function calcSubPrice(product) {
  return +product.count * product.price;
}
