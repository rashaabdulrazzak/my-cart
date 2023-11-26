import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart.cartItems);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart?.cartItems.length === 0 ? (
        <>
          <div className="cart-empty">
            <p> Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  classNmae="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="photo">Photo</h3>
            </div>
            <div className="cart-titles">
              {cart.cartItems?.map((product) => (
                <div className="cart-item">
                  <img src={product.thumbnail} alt={product.title} />{" "}
                  <div>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <button>remove</button>
                    <h5>${product.price}</h5>
                  </div>
                  <div className="cart-product-price">${product.price}</div>
                  <div className="cart-product-quantity">
                    <button>-</button>
                    <div className="count">{product.cartQuantity}</div>
                    <button>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${(product.price * product.cartQuantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button className="clear-cart">Clear Cart</button>
              <div className="cart-checkout">
                <div className="sub-total">
                  <span>Subtotal</span>
                  <span className="amount">$ {cart.cartTotalAmount}</span>
                  <p>Taxes and Shipping calculated</p>
                  <button className="checkout">checkout</button>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      classNmae="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
