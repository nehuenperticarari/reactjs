import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navegacion from './componente/Navegacion';
import ItemListContainer from './componente/ItemListContainer';
import FooterWeb from './componente/FooterWeb'
import ItemDetailContainer from './componente/ItemDetailContainer';
import Home from './pages/Home'
import Contacto from './pages/Contacto'



function App() {
  return (
    <div className="App" >
      
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route path="/home" index element={<Home/>}/> 
          <Route path="/categoria/:category" element={<ItemListContainer/>}/>
          <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          
        </Routes>
      </BrowserRouter>
      <FooterWeb/>
    </div>
  );
}

export default App;
