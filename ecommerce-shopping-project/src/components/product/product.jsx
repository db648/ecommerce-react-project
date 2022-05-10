import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import "./product.css"

export const Productpage = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        GetProducts();
    },[])

    const GetProducts = () => {
        axios.get("http://localhost:8080/products").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
    }

    return(
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>product</h2>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="row justify-content-around">
                    {product.map((ele) => {
                        return <>
                            <div key={ele.id} className="card my-5 py-3" style={{width:"22rem"}} >
                                <img src={ele.image} className="card-img-top" alt={ele.product_name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{ele.product_name}</h5>
                                    <h6 className="lead">{ele.product_brand} </h6>
                                    <h6 className="lead">Size : {ele.product_size}</h6>
                                    <p className="lead">Price : {ele.product_price}/-</p>
                                    <Link to={`/products/${ele.id}`} className="btn btn-outline-primary" >
                                        Buy Now
                                    </Link>
                                </div>

                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}