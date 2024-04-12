import {Route, Routes} from 'react-router-dom';
import Home from "../src/Screens/Home"; 
import Header from '../src/Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        {/* Define tus otras rutas en orden de precedencia */}
        {/* La primera ruta que coincida se renderizará */}
        {/* Agrega tus otras rutas aquí */}
        </Routes>
        <Footer />
      </div>
  );
}

/*
import Footer from './Components/Footer/Footer';
import ScreenDetallePelicula from './Components/detallePelicula/detallePelicula';
import ScreenVerTodasTop from './Screens/VerTodasTop/ScreenVerTodasTop';
import ScreenVerTodasUpcoming from './Screens/VerTodasUpcoming/ScreenVerTodasUpcoming';
import Favoritos from './Screens/Favoritos/Favoritos';
*/
     /*
        <Route path="/detalle/pelicula/:id" component={ScreenDetallePelicula}/>
        <Route path="/VerTodasTop" component={ScreenVerTodasTop}/>
        <Route path="/VerTodasUpcoming" component={ScreenVerTodasUpcoming} />
        <Route path="/favoritos" component={Favoritos}/>*/
export default App;