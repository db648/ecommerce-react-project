import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
    let quantity = 0;
    const cartitems = useSelector((state) => state.cartReducer.ProductReducer)
    //console.log("cartitems", cartitems);
    cartitems.forEach((e) => quantity+= e.qty )

    return(
        <>
           <nav className="navbar sticky-top navbar-expand-lg navbar-light bgclr">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand text-light" href="/">
                    <img src="https://img.icons8.com/external-flat-02-chattapat-/44/000000/external-skateboard-sales-flat-02-chattapat-.png" alt="logo" />
                    MyShopping
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link text-light " href="/product">Products</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link text-light " href="/menswear">Mens Wear</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light " href="/womenswear">Womens Wear</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/kidswear">Kid's Wear</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">Today's Deal</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <Link to="/cart" className="text-danger m-2 p-2 d-flex">
                        <img src="https://img.icons8.com/plasticine/50/000000/shopping-cart-with-money.png" alt="carticon" />
                        <h4>{ quantity }</h4>
                    </Link>
                </div>          
                <button className="btn btn-outline-primary my-2 my-sm-0 m-2" type="submit">Sign-In</button>
                <button className="btn btn-outline-primary my-2 my-sm-0 m-2" type="submit">Sign-Up</button>
                 
            </nav>
        </>
    )
}