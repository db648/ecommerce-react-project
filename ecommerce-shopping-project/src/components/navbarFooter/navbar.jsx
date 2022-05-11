import "./navbar.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export const Navbar = () => {
    const navigate = useNavigate()
    return(
        <>
            <div className="navbar">
                <div className="navbar_left">
                    <Link to="/" className="flex navleftheading">
                        <div>
                            <img className="header_logo" src="https://img.icons8.com/external-flat-02-chattapat-/54/000000/external-skateboard-sales-flat-02-chattapat-.png" alt="logo" />
                        </div>
                        <div>
                            <h3>MyShopping</h3>
                        </div>
                    </Link>
                    
                    <div onClick={() => {
                        navigate("/menswear")
                    }}>
                        <p>Men Wear</p>
                    </div>

                    <div onClick={() => {
                        navigate("/womenswear")
                    }}>
                        <p>Women Wear</p>
                    </div>

                    <div onClick={() => {
                        navigate("/kidswear")
                    }}>
                        <p>Kids Wear</p>
                    </div>

                    <div onClick={() => {
                        navigate("/todaydeals")
                    }}>
                        <p>Today's deals</p>
                        
                    </div>
                </div>

                <div className="navbar_right flex">
                        <div>
                            <a href="/login">Sign-In</a>
                        </div>
                        <div>
                            <a href="/register">Sign-Up</a>
                        </div>
                        
                        <img src="https://img.icons8.com/plasticine/50/000000/shopping-cart-with-money.png" alt="carticon" />
                                     
                </div>
           </div>


           {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand" href="/">
                    <img src="https://img.icons8.com/external-flat-02-chattapat-/54/000000/external-skateboard-sales-flat-02-chattapat-.png" alt="logo" />
                    MyShopping
                </a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    
                </div>
                <img src="https://img.icons8.com/plasticine/50/000000/shopping-cart-with-money.png" alt="carticon" />
                          
                <button class="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Sign-In</button>
                <button class="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Sign-Up</button>
                 
            </nav> */}
        </>
    )
}