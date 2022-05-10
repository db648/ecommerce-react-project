import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"


export const Registerpage = () => {
    return (
        <>
        <Navbar />
            <div className="mainlogin">
                <h2 className="centerheading">Sign-Up</h2>
                <form >
                    <input className="inputtag" type="text" placeholder="Enter Username" /> <br />
                    <input className="inputtag" type="email" placeholder="Enter Your Email Id" /> <br />
                    <input className="inputtag" type="password" placeholder="Enter Your Password" /> <br />
                    <input className="inputbtn" type="submit" value="Sign-up" />
                </form>
            </div>
        <Footerpage />
        </>
    )
}