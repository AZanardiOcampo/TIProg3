import {Route, Switch} from 'react-router-dom';
import Home from "../src/Screens/Home"
import Header from './Components/header/Header';
import Footer from './Components/Footer/Footer';
import ScreenDetallePelicula from './Components/detallePelicula/detallePelicula';
import ScreenVerTodasTop from './Screens/VerTodasTop/ScreenVerTodasTop';
import ScreenVerTodasUpcoming from './Screens/VerTodasUpcoming/ScreenVerTodasUpcoming';
import Favoritos from './Screens/Favoritos/Favoritos';
function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/"  exact={true} component={Home}/>
        <Route path="/detalle/pelicula/:id" component={ScreenDetallePelicula}/>
        <Route path="/VerTodasTop" component={ScreenVerTodasTop}/>
        <Route path="/VerTodasUpcoming" component={ScreenVerTodasUpcoming} />
        <Route path="/favoritos" component={Favoritos}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;