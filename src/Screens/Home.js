import React from 'react';
import { Component} from 'react';
import UpcomingMovies from '../Components/UpcomingMovies/UpComingMovies';
import TopMovies from '../Components/TopMovies/TopMovies';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div>
                <h1>Bienvenidos</h1>
                <h1>Peliculas mas valoradas:</h1>
                <TopMovies/>
                <h1>Proximamente:</h1>
                <UpcomingMovies/>
            </div>
        )
    }
}

export default Home