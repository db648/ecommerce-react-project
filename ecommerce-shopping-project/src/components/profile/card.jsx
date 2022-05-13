import { useNavigate } from "react-router"


export const Card = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 card " style={{width:"18rem" , margin:"20px"}} onClick={() => {
                        navigate("/")
                    }}>
                        <h4 class="card-text"> All Products</h4>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8BZnNsKXeWOytU1mut-nSbiAH64QGerudw&usqp=CAU" alt="family" />
                    </div>
                    
                    <div className="col-sm-3 card" style={{width:"18rem" , margin:"20px"}} onClick={() => {
                        navigate("/menswear")
                    }} >
                        <h4 > Men's Wear</h4>
                        <img src="https://thumbs.dreamstime.com/b/positive-man-enjoying-shopping-happy-man-shopping-bags-isolated-white-excited-happy-man-doing-online-shopping-thanks-150853335.jpg" alt="men" />
                    </div>
                    
                    <div className="col-sm-3 card" style={{width:"18rem" , margin:"20px"}} onClick={() => {
                        navigate("/womenswear")
                    }} >
                        <h4 > Women's Wear</h4>
                        <img src="https://media.istockphoto.com/photos/pretty-young-woman-stylishly-dressed-in-a-straw-hat-with-color-bags-picture-id1033729610?k=20&m=1033729610&s=612x612&w=0&h=56u-S8LPU2gL5CO3kSF9wq_PV4kSY5oVl7Hhm-0fshg=" alt="women" />
                    </div>

                    <div className="col-sm-3 card" style={{width:"18rem" , margin:"20px"}} onClick={() => {
                        navigate("/kidswear")
                    }} >
                        <h4 > Kid's Wear</h4>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFY8vEyRxz6vny46bH4epAbho2ch7z6IyIvQ&usqp=CAU" alt="kids" />
                    </div>
                </div>
            </div>

            {/* <div class="card text-center w-75 mx-auto">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
        </>
    )
}