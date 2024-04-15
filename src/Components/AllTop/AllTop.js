import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import '../AllTop/AllTop.css'

class AllTop extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [],
            favoritos: [],
            pag: 1
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126")
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({ peliculas: data.results });
            })
            .catch(e => console.log(e));
    }

    favoritos(arrayStorage) {
        this.setState({ favoritos: arrayStorage });
    }

    masPeliculas(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7384aa0b23ce68ba408f9921ee711e62&page=${(this.state.pag + 1)}`)
        .then(res => res.json())
        .then(data => this.setState({
            peliculas : this.state.peliculas.concat(data.results),
            pag: this.state.pag + 1
        }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <section>
                <div  className="Alltop">
                    {
                        this.state.peliculas.map((elm, idx) => (
                            <MovieCard
                                key={idx + elm.title}
                                actualizarFavoritos={(arr) => this.favoritos(arr)}
                                esFavorito={this.state.favoritos.includes(elm.id)}
                                peliculas={elm}
                            />
                        ))
                    }
                    </div>
                    <button onClick={()=>this.masPeliculas()}>Cargar Mas</button>
            </section>
        );
    }
}

export default AllTop;