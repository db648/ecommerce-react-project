import './App.css'
import { Routes, Route } from "react-router-dom"
import { Loginpage } from './components/profile/login'
import { Registerpage } from './components/profile/register'
import { Notfound } from './components/home/notfound'
import { Productpage } from './components/product/product'
import { ProductDetailspage } from './components/product/singleproduct'
import { Homepage } from './components/home/homepage'
import { Kidswear } from './components/section/kidswear'
import { Womenswear } from './components/section/womenwear'
import { Menswear } from './components/section/menwear'
import { Cartpage } from './components/product/cart'
import { CheckoutPage } from './components/product/checkout'
import { Paymentpage } from './components/product/paymentpage'
import { useSelector } from 'react-redux'
import { KidProductpage } from './components/section/kidproduct'
import { WomenProductpage } from './components/section/womenproduct'
import { MenProductpage } from './components/section/menproduct'

function App() {
  const user = useSelector((state) => state.authReducer.AuthReducer.loginUser)
  console.log("user",user)
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={ <Homepage /> } />
        <Route exact path="/login" element={ <Loginpage /> } />
        <Route exact path="/register" element={ <Registerpage /> } />
        {/* <Route exact path='/product' element={ <Productpage /> } /> */}
        <Route exact path="/products/:id" element={ <ProductDetailspage /> } />
        <Route exact path="/kids/:id" element={ <KidProductpage /> } />
        <Route exact path="/women/:id" element={ <WomenProductpage /> } />
        <Route exact path="/men/:id" element={ <MenProductpage /> } />
        <Route exact path='/cart' element={ <Cartpage /> } />
        <Route exact path='/checkout' element={ user ? <CheckoutPage /> : <Registerpage /> } />
        <Route exact path='/payment' element={ <Paymentpage /> } />
        <Route exact path='/menswear' element={ <Menswear /> } />
        <Route exact path='/womenswear' element={ <Womenswear /> } />
        <Route exact path='/kidswear' element={ <Kidswear/> } />
        <Route exact path="*" element={ <Notfound /> } />
      </Routes>     

    </div>
  )
}

export default App
