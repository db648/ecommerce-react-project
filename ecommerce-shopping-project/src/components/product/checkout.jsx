import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";

export const CheckoutPage = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cartReducer.ProductReducer);
    let total = 0;
    cart.forEach((e) => total+= +(e.product_price*e.qty))

    return (
        <>
        <Navbar />
        
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last btn btn-outline-success">
                        <h2>
                            Order Summary
                        </h2>
                        <br />
                        <h6>
                            Bag Total Price : {total} /-
                        </h6>
                        <br />
                        <h6>
                            GST Charges : {Math.floor(total*(0.18))} /-
                        </h6>
                        <br />
                        <h6>
                            Delivery Charges : 99 /-
                        </h6>
                        <br />
                        <h4>
                            Total Amount : {Math.floor(total+total*(0.18))} /-
                        </h4>
                        
                    </div>

                    <div className="col-md-7 col-lg-8">
                        <h1 className="mb-3 bg-secondary text-warning w-50" >Billing Address</h1>
                        <br />
                        <form className="needs-validation" >
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="email" className="form-label">Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="abc@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="number" className="form-label">Phone Number </label>
                                    <input type="number" className="form-control" id="number" placeholder="Enter 10 Digits" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Fill complete address" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required="">
                                        <option>Choose...</option>

                                        <option>India</option>
                                        <option>UK</option>
                                        <option>China</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="">
                                        <option>Choose...</option>
                                        <option>Hyderabad</option>
                                        <option>Bengaluru</option>
                                        <option>Kolkata</option>
                                        <option>Ahemdabad</option>
                                        <option>Chennai</option>
                                        <option>Mumbai</option>
                                        <option>Dehil</option>
                                        
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="6 digits" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>


                            <hr className="my-4" />

                            <button className="w-50 btn btn-outline-info btn-lg" type="submit" onClick={() => {
                                navigate("/payment")
                            }}>Continue to Payment</button>
                        </form>
                    </div>
                </div>
            </div>

            <br />

            <Footerpage />
        </>
    );
}
