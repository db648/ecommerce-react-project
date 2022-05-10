import { useEffect, useState } from "react"
import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"
import { Productpage } from "../product/product"

export const Homepage = () => {
    let homeImages = [
        "https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p2-aks-5070.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/10052022-D-KHP-topbannercarousel-p3-categoryday-brands-starting149.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/10052022-D-MHP-topbannercarousel-p2-johnplayers-upto66.jpg",
        "https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p4-jeansshorts-min50.jpg"
    ]

    const [img, setImg] = useState(homeImages[0]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        if(homeImages.length > num) {
            setTimeout(() => {
                setImg(homeImages[num])
                setNum(num+1);
            },2000)
        }
        else{
            setNum(0);
        }
    },[num])

    return(
        <>
        <Navbar />
            <div className="homepage">
                <div>
                <img src={img} alt="image" />
                </div>
            </div>

            <Productpage />
        <Footerpage />
        </>
    )
}