import './App.css'
import { Routes, Route } from "react-router-dom"
import { Loginpage } from './components/profile/login'
import { Registerpage } from './components/profile/register'
import { Notfound } from './components/profile/notfound'
import { Productpage } from './components/product/product'
import { SingleProductpage } from './components/product/singleproduct'
import { Homepage } from './components/profile/homepage'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/login" element={ <Loginpage /> } />
        <Route path="/register" element={ <Registerpage /> } />
        <Route path='/product' element={ <Productpage /> } />
        <Route path="/product/id" element={ <SingleProductpage /> } />
        <Route path='/menswear' element={""} />
        <Route path='/womenswear' element={""} />
        <Route path='/kidswear' element={""} />
        <Route path="*" element={ <Notfound /> } />
      </Routes>

    </div>
  )
}

export default App
