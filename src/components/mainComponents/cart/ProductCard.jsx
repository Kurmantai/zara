import React from "react";
import "./ProductCart.scss";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContexProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useFavorite } from "../../contexts/FavoriteContexProvider";

const ProductCard = ({}) => {
  const { deleteProduct, products } = useProduct();
  const { addProductToCart } = useCart();

  const { addProductToFavorite } = useFavorite();

  return (
    <>
      {products.map((item) => (
        <div className="cart">
          <div className="product__cart">
            <div className="cart__liked"></div>
            <div className="cart__bascket">
              <p>+</p>
            </div>
            <div className="cart__footer">
              <img className="cart__image" src={item.image} alt="image" />
              <div onClick={() => addProductToCart(item)} className="crat__btn">
                +
              </div>
              <div
                onClick={() => addProductToFavorite(item)}
                className="crat__fav"
              >
                f
              </div>

              <p className="cart__title">{item.title}</p>
              <p className="cart__price">{item.price} EURO</p>

              <Link to={`/edit/${item.id}`}>
                <p
                  className="cart__btn_edit"
                  component={Link}
                  to={`/edit/${item.id}`}
                >
                  EDIT
                </p>
              </Link>
              <p
                className="cart__btn_delete"
                onClick={(id) => deleteProduct(item.id)}
              >
                DELETE
              </p>
            </div>
          </div>
        </div>
      ))}
    </>

    // <div className="cart">
    //   <div className="product__cart">
    //     <div className="cart__liked"></div>
    //     <div className="cart__bascket">
    //       <p>+</p>
    //     </div>
    //     <div className="cart__footer">
    //       <p className="cart__title">SHOES</p>
    //       <p className="btn">Lorem ipsum dolor sit amet consectetur.
    //       </p>
    //       <p className="cart__price">400.00$</p>

    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
