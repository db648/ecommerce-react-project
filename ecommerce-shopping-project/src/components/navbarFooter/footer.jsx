import { useNavigate } from "react-router"
import "./footer.css"
export const Footerpage = () => {
    const navigate = useNavigate();
    return(
        <>
            <section className="footer">
 
                <footer className="text-center text-white footerdiv">
                
                    <div className="container p-4 pb-0">                   
                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Register for free</span>
                            <button type="button" className="btn btn-outline-light btn-rounded" onClick={() => {
                                navigate("/register")
                            }}>
                                Sign up!
                            </button>
                            </p>
                        </section>                    
                    </div>
                
                    <div className="text-center p-3 footertextdiv">
                        © 2022 Made with ❤ By Durga Bhavani V -
                        <a className="text-white" href="/">MyShopping.com</a>
                    </div>
                
                </footer>
                
            </section>
        </>
    )
}