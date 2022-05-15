import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"


export const Paymentpage = () => {
    const navigate = useNavigate();
    const payment = useSelector((state) => state.cartReducer.ProductReducer);
    let total = 0;
    payment.forEach((e) => total+= e.product_price*e.qty)

    return (
        <>
        <Navbar />
        
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <br />
                        <br />
                        <h2 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-secondary">Payment Details</span>
                        </h2>
                        <br />
                        <h4 className="text-secondary">
                            Total Amount Payable : {+(Math.floor(total+total*(0.18)))} /-
                        </h4>
                        <img className="card-img-top " src="https://thumbs.dreamstime.com/b/family-shopping-10506966.jpg" alt="img" />
                    </div>
                    
                    <div className="col-md-7 col-lg-8">
                        <h1 className="mb-3 text-light bg-dark w-50">PAYMENT SECTION</h1>
                        <br />
                        <form className="needs-validation" >
                            <h5 className="mb-3">Payment Types</h5>

                            <div className="my-4">                               
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <br />
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <br />
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                                <br />
                                <div className="form-check">
                                    <input id="cod" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="cod">Cash On Delivery</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="00/00" required="" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="0000" required="" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-info btn-lg" type="submit" onClick={() => {
                                alert("Order Placed Succefully !!")
                                navigate("/")
                            }}>Place Order</button>
                        </form>
                    </div>
                </div>
            </div>

            <br />

            <Footerpage />
        </>
    )
}