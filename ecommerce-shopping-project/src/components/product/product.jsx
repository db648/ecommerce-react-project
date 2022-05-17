import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import "./product.css"

export const Productpage = () => {
    const [product, setProduct] = useState([]);
    // const [resData, setResData] = useState(product);
    const [filtersize, setFiltersize] = useState("")
    
    useEffect(() => {
        GetProducts();
    },[])

    const GetProducts = () => {
        axios.get("http://localhost:8080/products")
        .then((res) => {
            // console.log(res.data);
            setProduct(res.data);
            // setResData(res.data);

        })
        .catch((err) => {
            console.log(err)
        })
    }

    const sortPrice = (value) => {
        //console.log("value", value)
        if(value === "asc") {
            let data = product.sort((a,b) => a.product_price - b.product_price)
            console.log("data",data)
            setProduct(data)
        //   let data = resData.sort((a,b) => a.product_price - b.product_price)
        //   setResData(data)
        }
        else {
          let data1 = product.sort((a,b) => b.product_price - a.product_price)
          console.log("data1",data1)
          setProduct(data1)
        }
    }

    return(
        <div>
            
            <nav className="navbar navbar-light w-75 mx-auto bg-secondary justify-content-between">
                <h2 className="text-warning">Products</h2>
                <div>
                    <select
                    className="btn btn-outline-warning m-2 p-2"
                    onChange={(e) => {
                        setFiltersize(e.target.value);
                    }}
                    >
                    <option value="">Filter By Product Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    </select>
                </div>

                <div>
                    <select className="btn btn-outline-warning m-2 p-2" 
                        onChange={(e) => {
                            sortPrice(e.target.value)
                        }} >
                        <option value="">Sort by Product Price</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>

                <form className="form-inline d-flex m-2">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning my-2 my-sm-0 " type="submit">Search</button>
                </form>
            </nav>

            <div className="container">
                <div className="row justify-content-around">
                    {
                    product
                    .filter((ele) => ele.product_size.includes(filtersize))
                    .map((ele) => {
                        return <>
                            <div key={ele.id} className="card my-5 py-3" style={{width:"22rem"}} >
                                <img src={ele.image} className="card-img-top" alt={ele.product_name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{ele.product_name}</h5>
                                    <h6 className="lead">{ele.product_brand} </h6>
                                    <h6 className="lead">Size : {ele.product_size}</h6>
                                    <p className="lead">Price : Rs. {ele.product_price}</p>
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