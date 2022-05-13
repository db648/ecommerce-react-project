import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";
import { addProduct, clearBag, deleteProduct } from "../redux/action";

export const Cartpage = () => {
  const {id} = useParams()
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.ProductReducer);
  console.log("cart", cart);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += +cart[i].product_price*cart[i].qty;
  }

  const handleDelete = (del) => {
    dispatch(clearBag(del));
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

                <div className="col-sm-1">
                  <h5 className="m-2 p-2">{ele.qty*ele.product_price}/-</h5>
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
                <div className="col-sm-2 w-100 d-flex justify-content-center mx-auto">
                    <h4>
                   Total Amount Payable : <span>{(total+total*(0.18))}</span>
                    </h4>
                </div>
            </div>

            <br />
            <div className="row">
            <div className="col-sm-2 w-100 d-flex justify-content-center mx-auto">
                <button
                className=" w-75 text-secondary btn btn-outline-info my-4 my-sm-2 m-2 p-2"
                type="submit"
                onClick={() => {
                    navigate("/checkout")
                }}
                >
                Proceed To Checkout
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
