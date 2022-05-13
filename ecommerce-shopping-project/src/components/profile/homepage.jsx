import { useEffect, useState } from "react"
import { CarouselComponent } from "../carousel/carousel"
import { Footerpage } from "../navbarFooter/footer"
import { Navbar } from "../navbarFooter/navbar"
import { Productpage } from "../product/product"
import { Card } from "./card"

export const Homepage = () => {
    
    return(
        <>
        <Navbar />
            <CarouselComponent /> 
            <br />  
            <Card /> 
            <br />       
            <Productpage />
        <Footerpage />
        </>
    )
}