import { useDispatch, useSelector } from "react-redux";
import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";
import { addProduct, deleteProduct } from "../redux/action";

export const Cartpage = () => {
    const dispatch = useDispatch();
  const cart = useSelector(
    (state) => state.cartReducer.ProductReducer.ProductData
  );
  console.log("cart", cart);

  const handleQuantity = (val, product) => {
    if(val === 1) dispatch(addProduct(product));
    else dispatch(deleteProduct(product));
  } 
  const handleDelete = (product) => {
      dispatch(deleteProduct(product));
  }

  return (
    <>
      <Navbar />
      <div className="container w-75 my-3 py-3">
        <h2 className="fw-bold">Your Shopping Cart</h2>
        <br />
        <br />
        {cart.map((ele) => {
          return (
            <>
              <div className="row">
                <div className="col-sm-3">
                  <img className="col-sm-8 d-flex justify-content-center mx-auto m-2 p-2" src={ele.image} alt="cart image" />
                </div>

                <div className="col-sm-3">
                  <h5 className="m-2 p-2">{ele.product_name}</h5>
                  <h5 className="m-2 p-2">Size : {ele.product_size}</h5>
                  <h5 className="m-2 p-2">Color : {ele.product_color}</h5>
                </div>

                <div className="col-sm-2 my-4">
                  <button
                    className="btn btn-outline-danger my-2 my-sm-0 m-2"
                    type="submit"
                    onClick={() => {
                        handleQuantity(-1, item)
                    }}
                  >
                    -
                  </button>

                  <div className="my-2 my-sm-0 m-2 p-2">
                    <b>0</b>
                  </div>

                  <button
                    className="btn btn-outline-success my-2 my-sm-0 m-2"
                    type="submit"
                    onClick={() => {
                        handleQuantity(1, item)
                    }}
                  >
                    +
                  </button>
                </div>

                <div className="col-sm-1">
                  <h5 className="m-2 p-2">{ele.product_price}</h5>
                </div>

                <div className="col-sm-1 m-2 p-2" onClick={() => {
                    handleDelete(item);
                }}>
                  <img src="https://img.icons8.com/color/48/000000/delete-forever.png" />
                </div>
              </div>
            </>
          );
        })}

        <hr />

        <div className="row">
          <div className="col-sm-2 w-50 d-flex justify-content-center mx-auto">
            <h4>
              Total Price : <span>1200/-</span>
            </h4>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-2 w-50 d-flex justify-content-center">
            <button
              className="btn btn-outline-danger my-2 my-sm-0 m-2"
              type="submit"
              onClick={() => {}}
            >
              Clear Cart 
            </button>
          </div>
          <div className="col-sm-2 w-50 d-flex justify-content-center">
            <button
              className="btn btn-outline-primary my-2 my-sm-0 m-2"
              type="submit"
              onClick={() => {}}
            >
              Proceed To Purchase
            </button>
          </div>
        </div>
      </div>

      <Footerpage />
    </>

  );
};
