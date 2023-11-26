import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";
const Home = () => {
  // fetch using thunk
  //const { items, status } = useSelector((state) => state.products);
  // console.log(items.products);
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddtoCart = (product) => {
    //dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p> Loading</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrival</h2>
          <div className="products">
            {data.products?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.images[0]} alt={product.name} />
                <div className="details">
                  <span>{product.description.substring(0, 50)}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddtoCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
