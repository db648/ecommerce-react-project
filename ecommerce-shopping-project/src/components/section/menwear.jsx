import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { Navbar } from "../navbarFooter/navbar";
import { Footerpage } from "../navbarFooter/footer";
import { CarouselComponentMens } from "../carousel/menCarousel";

// https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-banner1-men-p1-brands-upto70.jpg

export const Menswear = () => {
    const [men, setMen] = useState([]);
   
    useEffect(() => {
        GetMenProducts();
    },[])

    const GetMenProducts = () => {
        axios.get("http://localhost:8080/men").then((res) => {
            console.log(res.data);
            setMen(res.data);
        })
    }

    return(
        <div>
            <Navbar />
            <CarouselComponentMens />
            {/* <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Men's Products</h2>
                    </div>
                </div>

            </div> */}

            <div className="container">
                <div className="row justify-content-around">
                    {men.map((ele) => {
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
