

export const OrderDetails = () => {
    return(
        <>
         <div className="container w-25" >
            
            <h2 className="d-flex justify-content-center mx-auto" >Order Summary</h2>
            <hr />
                <div className="row">
                    <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                        <h4>
                        Bag Total Price : 
                        </h4>
                        <h4>{total}/-</h4>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                        <h4>
                        GST Charges : <span>{(total*(0.18))}</span>
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                        <h4>
                        Delivery Charges : <span>99/-</span>
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                        <h4>
                        Amount Payable : <span>{(total+total*(0.18))}</span>
                        </h4>
                    </div>
                </div>
    
                <br />
                <div className="row">
                <div className="col-sm-2 w-75 d-flex justify-content-center mx-auto">
                    <button
                    className="btn btn-outline-primary my-2 my-sm-0 m-2"
                    type="submit"
                    onClick={() => {
                        navigate("/checkout")
                    }}
                    >
                    Proceed To Checkout
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}