import React from 'react';
import Header from "../Components/header/Header"
import { Component} from 'react';
import TopPeliculas from '../Components/TopPeliculas/TopPeliculas';
import UpComingMovies from '../Components/UpcomingMovies/UpComingMovies';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div className="MainPadre">
                
                <TopPeliculas/>
                <UpComingMovies/>
            </div>
        )
    }
}

export default Home