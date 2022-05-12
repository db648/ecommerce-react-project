import { useEffect, useState } from "react"
import { CarouselComponent } from "../carousel"
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
            <CarouselComponent />
            
            <Productpage />
        <Footerpage />
        </>
    )
}