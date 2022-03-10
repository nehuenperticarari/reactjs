import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navegacion from './componente/Navegacion';
import ItemListContainer from './componente/ItemListContainer';
import FooterWeb from './componente/FooterWeb'
import ItemDetailContainer from './componente/ItemDetailContainer';
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'



function App() {
  return (
    <div className="App" >
      
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route path="/home" index element={<Home/>}/> 
          <Route path="/categoria" element={<ItemListContainer/>}/>
          <Route path="/categoria/:category" element={<ItemListContainer/>}/>
          <Route path="/productos/:id" element={<ItemDetailContainer/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          
        </Routes>
      </BrowserRouter>
      <FooterWeb/>
    </div>
  );
}

export default App;
