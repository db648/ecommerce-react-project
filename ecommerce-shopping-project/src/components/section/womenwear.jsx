import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { Navbar } from "../navbarFooter/navbar";
import { Footerpage } from "../navbarFooter/footer";
import { CarouselComponentWomens } from "../carousel/womenCarousel";
import { Card } from "../home/card";

// https://assets.ajio.com/cms/AJIO/WEB/15042022-D-Unisex-ourexclusivebrands-womensethnicwear.jpg
export const Womenswear = () => {
    const [women, setWomen] = useState([]);
   
    useEffect(() => {
        GetWomenProducts();
    },[])

    const GetWomenProducts = () => {
        axios.get("https://ecommerce-shopping-project.herokuapp.com/women",{
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("login_status")).accessToken,
            },
          })
        .then((res) => {
            console.log(res.data);
            setWomen(res.data);
        })
    }

    return(
        <div>
            <Navbar />
            <CarouselComponentWomens />
            <br />
            <Card />
            <br />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Women's Products</h2>
                    </div>
                </div>

            </div>

            <div className="container">
                <div className="row justify-content-around">
                    {women.map((ele) => {
                        return <>
                            <div key={ele.id} className="card my-5 py-3" style={{width:"22rem"}} >
                                <img src={ele.image} className="card-img-top" alt={ele.product_name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Product Name : {ele.product_name}</h5>
                                    <h6 className="lead">Brand : {ele.product_brand} </h6>
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
            <Footerpage />
        </div>
    )
}