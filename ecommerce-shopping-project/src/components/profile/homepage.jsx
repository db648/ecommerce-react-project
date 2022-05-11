import { useEffect, useState } from "react"
import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"
import { Productpage } from "../product/product"

export const Homepage = () => {
    // let homeImages = [
    //     "",
    //     "",
    //     "",
    //     "",
    //     ""
    // ]

    // const [img, setImg] = useState(homeImages[0]);
    // const [num, setNum] = useState(0);

    // useEffect(() => {
    //     if(homeImages.length > num) {
    //         setTimeout(() => {
    //             setImg(homeImages[num])
    //             setNum(num+1);
    //         },2000)
    //     }
    //     else{
    //         setNum(0);
    //     }
    // },[num])

    return(
        <>
        <Navbar />
            {/* <div className="homepage">
                <div>
                <img src={img} alt="image" />
                </div>
            </div> */}

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p2-aks-5070.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-KHP-topbannercarousel-p3-categoryday-brands-starting149.jpg" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-MHP-topbannercarousel-p2-johnplayers-upto66.jpg" alt="fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p4-jeansshorts-min50.jpg" alt="fifth slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <Productpage />
        <Footerpage />
        </>
    )
}