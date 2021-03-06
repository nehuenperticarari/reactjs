import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navegacion from './componente/Navegacion';
import ItemListContainer from './componente/ItemListContainer';
import FooterWeb from './componente/FooterWeb'
import ItemDetailContainer from './componente/ItemDetailContainer';
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import { CartContextProvider } from './context/CartContext';
import CartView  from './componente/CartView';
import Order from './componente/Order'




function App() {
  return (
    <div className="App" >
      <CartContextProvider>
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route path="/" index element={<Home/>}/> 
          <Route path="/categoria/:category" element={<ItemListContainer/>}/>
          <Route path="/productos/:nombre" element={<ItemDetailContainer/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/cart" element={<CartView />}></Route>
          <Route path="/comprar" element={<Order/>}></Route>
        </Routes>
      </BrowserRouter>
      <FooterWeb/>
      </CartContextProvider>
    </div>
  );
}

export default App;
