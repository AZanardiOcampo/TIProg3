import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import './TopMovies.css'

class TopMovies extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [], 
            favoritos: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126")
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({ peliculas: data.results, isLoading: false }); 
            })
            .catch(e => console.log(e));
    }

    actualizarFavoritos(arrayStorage) {
        this.setState({ favoritos: arrayStorage });
    }

    render() {
        let recorte = this.state.peliculas.slice(0,5);
        const { isLoading } = this.state;
        if (isLoading) {
          return <div>LOADING...</div>;
        }
        return (
            <section>
                <div className='ContainerTop'>
                {
                    recorte.map((elm, idx) => (
                        <MovieCard
                            key={idx + elm.title}
                            actualizarFavoritos={(arrayStorage) => this.actualizarFavoritos(arrayStorage)}
                            esFavorito={this.state.favoritos.includes(elm.id)}
                            peliculas={elm} 
                        />
                    ))
                }
                </div>
                <Link to="/AllTop"><button className='botonVerTodos'>VER TODAS LAS PELICULAS</button></Link>
            </section>
        );
    }
}

export default TopMovies;
