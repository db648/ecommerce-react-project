import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"

export const Loginpage = () => {
    return(
        <>
        <Navbar />
            <div className="mainlogin">
                <h2 className="centerheading">Sign-In</h2>
                <form >
                    <input className="inputtag" type="email" placeholder="Enter Your Email Id" /> <br />
                    <input className="inputtag" type="password" placeholder="Enter Your Password" /> <br />
                    <input className="inputbtn" type="submit" value="Login" />                    
                </form>
                <div>
                Not a member? <a href="/register" className="registerlink">Register</a>
                </div>
            </div>
        <Footerpage />
        </>
    )
}