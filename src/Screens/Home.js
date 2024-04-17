import React from 'react';
import { Component} from 'react';
import Header from '../Components/Header/Header'
import UpcomingMovies from '../Components/UpcomingMovies/UpComingMovies';
import TopMovies from '../Components/TopMovies/TopMovies';
import SearchResults from '../Components/SearchResults/SearchResults';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log('props home', props)
    }
     
    render () {
        return (
            <div>
                <SearchResults
                 history={this.props.history}
                />
                <h1 class="h2-home">PELICULAS MEJOR VALORADAS</h1>
                <TopMovies/>
                <h1 class="h2-home">PROXIMAMENTE</h1>
                <UpcomingMovies/>
            </div>
        )
    }
}

export default Home