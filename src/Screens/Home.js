import React from 'react';
import { Component} from 'react';
import MovieCard from '../Components/MovieCard/MovieCard';
import TopMovies from '../Components/TopMovies/TopMovies';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div className="Home">
                <h1>Bienvenidos</h1>
                <TopMovies/>
            </div>
        )
    }
}

export default Home