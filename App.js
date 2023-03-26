// import logo from './logo.svg';
import './App.css';


import ListaProductos from './components/ListaProductos/ListaProductos';

import NotFound from './components/NotFound/NotFound';
import PanelCategorias from './components/PanelCategorias/PanelCategorias';
import PanelProductos from './components/PanelProductos/PanelProductos';
import PanelUsuarios from './components/PanelUsuarios/PanelUsuarios';
import ContenedorPaneles from './components/ContenedorPaneles/ContenedorPaneles';
import UltimoProducto from './components/UltimoProducto/UltimoProducto';
import DetalleCategorias from './components/DetalleCategorias/DetalleCategorias';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ContenedorPaneles />} />
            <Route path='/listaproductos' element={<ListaProductos />} />
            <Route path='/categorias' element={<PanelCategorias />} />
            <Route path='/productos' element={<PanelProductos />} />
            <Route path='/usuarios' element={<PanelUsuarios />} />  
            <Route path='/ultimoproducto' element={<UltimoProducto />} />
            <Route path='/detalle-categorias' element={<DetalleCategorias />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
