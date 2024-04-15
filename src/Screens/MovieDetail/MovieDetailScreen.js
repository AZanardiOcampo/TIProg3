import React from 'react';
import { Component} from 'react';
import MovieDetail from '../../Components/MovieDetail/MovieDetail';
/* import "../MovieDetail.css" */

class MovieDetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div className="MovieDetail">
                <MovieDetail/>
            </div>
        )
    }
}

export default MovieDetailScreen;