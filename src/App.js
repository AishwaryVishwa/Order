
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./Pages/Home"
import Menu from './Pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContext from './Components/CartContext';
function App() {
   return (
      <>
         {/* <Menu/> */}
         <CartContext>

            <BrowserRouter>
               <Routes>

                  <Route path='/' element={<Home />}></Route>
                  <Route path='/Menu' element={<Menu />}></Route>


               </Routes>
            </BrowserRouter>
         </CartContext>
         {/* <Home/> */}
      </>
   )
}

export default App;
