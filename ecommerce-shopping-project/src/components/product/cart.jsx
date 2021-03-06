import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";
import { Card } from "../home/card";
import { addProduct, clearBag, deleteProduct } from "../redux/cart-redux/action";

export const Cartpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.ProductReducer);

  const handleDelete = (del) => {
    dispatch(clearBag(del));
  };

  const increaseQuantity = (item) => {
    dispatch(addProduct(item));
  };

  const decreaseQuantity = (item) => {
    dispatch(deleteProduct(item));
  };

  return (
    <>
      <Navbar />
      {cart.length > 0 
      ? 
      <div className="container w-75 my-3 py-3">
        <h2 className="fw-bold d-flex justify-content-center mx-auto bg-light text-warning">
          Your Shopping Cart
        </h2>
        <br />
        <br />
        {cart.map((ele) => {
          return (
            <div className="container my-5 py-3">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center mx-auto">
                  <img
                    className="w-75 d-flex justify-content-center mx-auto"
                    src={ele.image}
                    alt="cart image"
                  />
                </div>

                <div className="col-sm-3">
                  <h5 className="m-2 p-2">{ele.product_name}</h5>
                  <h5 className="m-2 p-2">Size : {ele.product_size}</h5>
                  <h5 className="m-2 p-2">Color : {ele.product_color}</h5>
                  <p className="m-2 p-2">Rs. {ele.product_price}</p>
                </div>

                <div className="col-sm-1 my-4">
                  <button
                    className="btn btn-outline-danger my-2 my-sm-0 m-2"
                    type="submit"
                    onClick={() => {
                      decreaseQuantity(ele);
                    }}
                  >
                    -
                  </button>

                  <div className="my-2 my-sm-0 m-2 p-2">
                    <b>{ele.qty}</b>
                  </div>

                  <button
                    className="btn btn-outline-success my-2 my-sm-0 m-2"
                    type="submit"
                    onClick={() => {
                      increaseQuantity(ele);
                    }}
                  >
                    +
                  </button>
                </div>

                <div className="col-sm-2">
                  <h5 className="m-2 p-2">Rs. {(ele.qty * ele.product_price)}</h5>
                </div>

                <div
                  className="col-sm-1 m-2 p-2"
                  onClick={() => {
                    handleDelete(ele);
                  }}
                >
                  <img src="https://img.icons8.com/color/48/000000/delete-forever.png" />
                </div>
                
              </div>
            </div>
          );
        })}
        <br />

        <button
          className=" w-25 text-secondary btn btn-info d-flex justify-content-center mx-auto"
          type="submit"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Proceed To Checkout
        </button>
      </div>
      :
      <>
            <div className="container">
                <div className="row">

                    <div className="col-sm-4 mx-auto card" style={{margin:"50px 0px"}} >
                        <img src="https://www.mycarrom.com/empty-cart.png" alt="Your Shopping Cart is Empty" />
                        <br />
                        <h6 className="text-danger">Let's take you shopping!!</h6>
                        <br />
                        <button className="btn btn-info" onClick={() => {
                        navigate("/")
                        }}> SHOP NOW</button>

                        <br />
                    </div>
    
                </div>
            </div>

            
      </>
    }
      <br />
      <Card />
      <br />

      <Footerpage />
    </>
  );
};
