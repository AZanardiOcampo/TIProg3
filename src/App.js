import {Route, Routes} from 'react-router-dom';
import Home from "../src/Screens/Home"; 
import Header from '../src/Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AllTop from './Components/AllTop/AllTop';

function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllTop" element={<AllTop />} />
        <Route path="/AllUpcoming" element={<Home />} />
        <Route path="/Favorites" element={< Home />} /> //Cambiar los elements por los componentes q corresponde
        </Routes>
        <Footer />
      </div>
  );
}

export default App;