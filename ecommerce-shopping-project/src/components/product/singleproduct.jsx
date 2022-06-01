import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct } from "../redux/cart-redux/action";

export const ProductDetailspage = () => {
    const {id} = useParams();
    const [proddetails, setProddetails] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    let Quantity = 0;
    const productitems= useSelector((state) => state.cartReducer.ProductReducer)
    // console.log("productitems",productitems)
    productitems.forEach((e) => Quantity = e.qty);

     useEffect(() => {
        GetProductsDetails();
    },[])

    const GetProductsDetails = () => {
        axios.get(`https://ecommerce-shopping-clone.herokuapp.com/products/${id}`)
        .then((res) => {
            console.log("single product details",res);
            setProddetails(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleCart = (proddetails) => {
        dispatch(addProduct(proddetails))
    }
    
    const increaseQuantity = (proddetails) => {
        dispatch(addProduct(proddetails));
    }
  
    const decreaseQuantity = (proddetails) => {
        dispatch(deleteProduct(proddetails));
    }
   
    return(
        <>
        <Navbar />
        <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 w-50 d-flex justify-content-center mx-auto product">
                       <img className="d-flex justify-content-center mx-auto" src={proddetails.image} alt="image" />
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center" >
                        <h1 className="display-5 fw-bold" >{proddetails.product_name}</h1>
                        <h3 className="my-4">{proddetails.product_brand}</h3>
                        <hr />
                        <h4 className="my-4"> <b>Price : Rs. </b> {proddetails.product_price}</h4>
                        <h4 className="my-4" > <b>Product Color : </b> {proddetails.product_color}</h4>
                        <h4> <b>Size of the Product : </b>{proddetails.product_size}</h4>

                        <div className="d-flex my-4">
                            <b>QUANTITY : </b> 

                                <button className="btn btn-outline-danger my-2 my-sm-0 m-2" type="submit" onClick={() => {
                                    decreaseQuantity(proddetails)
                                }}>-</button>
                                <div className="my-2 my-sm-0 m-2"><b>{Quantity}</b></div>
                                

                                <button className="btn btn-outline-success my-2 my-sm-0 m-2" type="submit" onClick={() => {
                                    increaseQuantity(proddetails)
                                }}>+</button>
                        </div>

                        <br />
                        <button className="btn btn-outline-primary w-50 m-2 p-2" onClick={() => {
                            handleCart(proddetails)
                        }} >
                            Add to Cart
                        </button>
                        <button className="btn btn-outline-primary w-50 m-2 p-2" onClick={() => {
                            navigate("/cart")
                        }} >
                            Go to CartPage
                        </button>

                        <br />
                        <h4 className="my-4">
                            Product Details
                            <br />
                            <ul>
                                <li className="lead" >{proddetails.category}</li>
                                <li className="lead" >{proddetails.material_type}</li>
                                <li className="lead" >{proddetails.wash}</li>
                            </ul>
                        </h4>
                        
                    </div>
                </div>
            </div>
        <Footerpage />
        </>
    )
}