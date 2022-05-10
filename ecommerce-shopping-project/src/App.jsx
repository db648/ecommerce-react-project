import './App.css'
import { Routes, Route } from "react-router-dom"
import { Loginpage } from './components/profile/login'
import { Registerpage } from './components/profile/register'
import { Notfound } from './components/profile/notfound'
import { Productpage } from './components/product/product'
import { ProductDetailspage } from './components/product/singleproduct'
import { Homepage } from './components/profile/homepage'
import { Kidswear } from './components/section/kidswear'
import { Womenswear } from './components/section/womenwear'
import { Menswear } from './components/section/menwear'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={ <Homepage /> } />
        <Route exact path="/login" element={ <Loginpage /> } />
        <Route exact path="/register" element={ <Registerpage /> } />
        <Route exact path='/product' element={ <Productpage /> } />
        <Route exact path="/products/:id" element={ <ProductDetailspage /> } />
        <Route exact path='/menswear' element={ <Menswear /> } />
        <Route exact path='/womenswear' element={ <Womenswear /> } />
        <Route exact path='/kidswear' element={ <Kidswear/> } />
        <Route exact path="*" element={ <Notfound /> } />
      </Routes>

    </div>
  )
}

export default App
