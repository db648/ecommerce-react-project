import { useEffect, useState } from "react"
import { CarouselComponent } from "../carousel/carousel"
import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"
import { Productpage } from "../product/product"

export const Homepage = () => {
    
    return(
        <>
        <Navbar />
            <CarouselComponent />           
            <Productpage />
        <Footerpage />
        </>
    )
}