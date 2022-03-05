import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navegacion from './componente/Navegacion';
import ItemListContainer from './componente/ItemListContainer';
import FooterWeb from './componente/FooterWeb'
import ItemDetailContainer from './componente/ItemDetailContainer';


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navegacion/>
        <Routes>
          <Route path="/" index element={<ItemListContainer/>}/> 
          <Route path="/Xbox" element={<ItemListContainer/>}/>
          <Route path="/Playstation" element={<ItemListContainer/>}/>
          <Route path="/Productos/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Nosotros"/>
        </Routes>
      </BrowserRouter>
      <FooterWeb/>
    </div>
  );
}

export default App;
