import "./navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
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
        </>
    )
}