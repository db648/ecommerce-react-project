import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux"
import { addProduct, deleteProduct } from "../redux/action";

export const ProductDetailspage = () => {
    const {id} = useParams();
    const [proddetails, setProddetails] = useState("");
    const [cartbtn, setCartbtn] = useState("Add to Cart");
    const dispatch = useDispatch();

     useEffect(() => {
        GetProductsDetails();
    },[])

    const GetProductsDetails = () => {
        axios.get(`http://localhost:8080/products/${id}`).then((res) => {
            console.log(res.data);
            setProddetails(res.data);
        })
    }

    const handleCart = () => {
        if(cartbtn === "Add to Cart") {
            dispatch(addProduct());
            setCartbtn("Remove Item from Cart");
        }
        else {
            dispatch(deleteProduct());
            setCartbtn("Add to Cart");
        }
    }
   
    return(
        <>
        <Navbar />
        <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                       <img src={proddetails.image} alt="image" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center" >
                        <h1 className="display-5 fw-bold" >{proddetails.product_name}</h1>
                        <h3 className="my-4">{proddetails.product_brand}</h3>
                        <hr />
                        <h4 className="my-4"> <b>Price : </b> {proddetails.product_price}/-</h4>
                        <h4 className="my-4" > <b>Product Color : </b> {proddetails.product_color}</h4>
                        <h4> <b>Size of the Product : </b>{proddetails.product_size}</h4>
                        <br />
                        <button className="btn btn-outline-primary w-75 p-2" onClick={() => {
                            handleCart()
                        }} >
                            {cartbtn}
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