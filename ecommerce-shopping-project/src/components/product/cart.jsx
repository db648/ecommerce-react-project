import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";
import { addProduct, deleteProduct } from "../redux/action";

export const Cartpage = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.ProductReducer);
  console.log("cart", cart);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += +cart[i].product_price;
  }

  const handleDelete = (del) => {
    dispatch(deleteProduct(del));
  };

  const increaseQuantity = (item) => {
      //setQuantity(quantity+1)
      dispatch(addProduct(item));
  }

  const decreaseQuantity = (item) => {
    //   if(quantity <= 1) return;
    //   setQuantity(quantity-1)
      dispatch(deleteProduct(item));
  }

  return (
    <>
      <Navbar />
      
      <div className="container w-75 my-3 py-3">
        <h2 className="fw-bold d-flex justify-content-center mx-auto bg-light text-warning">
          Your Shopping Cart
        </h2>
        <br />
        <br />
        {cart.map((ele) => {
          return (
            <>
              <div className="row">
                <div className="col-sm-4">
                  <img
                    className="col-sm-8 d-flex justify-content-center mx-auto m-2 p-2"
                    src={ele.image}
                    alt="cart image"
                  />
                </div>

                <div className="col-sm-4">
                  <h5 className="m-2 p-2">{ele.product_name}</h5>
                  <h5 className="m-2 p-2">Size : {ele.product_size}</h5>
                  <h5 className="m-2 p-2">Color : {ele.product_color}</h5>
                  <p className="m-2 p-2">{ele.product_price}</p>
                </div>

                <div className="col-sm-1 my-4">
                  <button
                    className="btn btn-outline-danger my-2 my-sm-0 m-2"
                    type="submit"
                    onClick={() => {
                        decreaseQuantity(item);
                    }}
                  >
                    -
                  </button>

                  <div className="my-2 my-sm-0 m-2 p-2">
                    <b>1</b>
                  </div>

                  <button
                    className="btn btn-outline-success my-2 my-sm-0 m-2"
                    type="submit"
                    onClick={() => {
                      increaseQuantity(item);
                    }}
                  >
                    +
                  </button>
                </div>

                <div className="col-sm-1">
                  <h5 className="m-2 p-2">{ele.product_price}/-</h5>
                </div>

                <div
                  className="col-sm-1 m-2 p-2"
                  onClick={() => {
                    handleDelete(del);
                  }}
                >
                  <img src="https://img.icons8.com/color/48/000000/delete-forever.png" />
                </div>
              </div>
            </>
          );
        })}

    </div>

       

        <div className="container w-25" >
            
        <h2 className="d-flex justify-content-center mx-auto" >Order Summary</h2>
        <hr />
            <div className="row">
                <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                    <h4>
                    Bag Total Price : 
                    </h4>
                    <h4>{total}/-</h4>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                    <h4>
                    GST Charges : <span>{(total*(0.18))}</span>
                    </h4>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                    <h4>
                    Delivery Charges : <span>99/-</span>
                    </h4>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                    <h4>
                    Amount Payable : <span>{(total+total*(0.18))}</span>
                    </h4>
                </div>
            </div>

            <br />
            <div className="row">
            <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                <button
                className="btn btn-outline-primary my-2 my-sm-0 m-2"
                type="submit"
                onClick={() => {
                    navigate("/checkout")
                }}
                >
                Proceed To Purchase
                </button>
            </div>
            </div>
        </div>

        <br />
        <br />

      <Footerpage />
    </>
  );
};
