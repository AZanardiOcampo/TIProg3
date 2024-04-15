import {Route, Routes} from 'react-router-dom';
import Home from "../src/Screens/Home"; 
import Header from '../src/Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AllUpcomingScreen from './Screens/AllUpcoming/AllUpcomingScreen';
import AllTopScreen from './Screens/AllTop/AllTopScreen';
import MovieDetailScreen from './Screens/MovieDetail/MovieDetailScreen';

function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllTop" element={<AllTopScreen />} />
        <Route path="/AllUpcoming" element={<AllUpcomingScreen />} />
        <Route path="/Favorites" element={< Home />} />
        <Route path="/MovieDetail/id/:id" element={< MovieDetailScreen />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;