import {Route, Switch} from 'react-router-dom';
import Home from "../src/Screens/Home"; 
import Header from '../src/Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AllUpcomingScreen from './Screens/AllUpcoming/AllUpcomingScreen';
import AllTopScreen from './Screens/AllTop/AllTopScreen';
import MovieDetailScreen from './Screens/MovieDetail/MovieDetailScreen';
import Results from './Screens/Results/Results';

function App() {
  return (
      <div className='App'>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/AllTop" component={AllTopScreen} />
          <Route path="/AllUpcoming" component={AllUpcomingScreen} />
          <Route path="/Favorites" component={Home} />
          <Route path="/Results/:search" component={Results} />
          <Route path="/MovieDetail/id/:id" component={MovieDetailScreen} />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;