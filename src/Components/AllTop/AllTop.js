import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import '../AllTop/AllTop.css'

class AllTop extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [],
            peliculasFiltradas: [],
            favoritos: [],
            pag: 1,
            busqueda: '',
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

    actualizarFavoritos(arrayStorage) {
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

    controlarCambio = (e) => {
        const busqueda = e.target.value.toLowerCase();
        const peliculasFiltradas = this.state.peliculas.filter((pelicula) =>
            pelicula.title.toLowerCase().includes(busqueda)
        );
        this.setState({ busqueda, peliculasFiltradas });
    };

    evitarSubmit(e) {
        e.preventDefault();
    }

    render() {
        const peliculasAMostrar = this.state.busqueda ? this.state.peliculasFiltradas : this.state.peliculas;

        return (
            <section>
                <div className="search-container"> 
                    <form onSubmit={(e) => this.evitarSubmit(e)} className="buscador">
                    <input
                        type="text"
                        placeholder="Buscar en mejor valoradas"
                        name="busqueda"
                        onChange={(e) => this.controlarCambio(e)}
                        value={this.state.busqueda}
                        className="search-input" 
                    />
                    </form>
                </div>
                <div  className="Alltop">
                {
                        peliculasAMostrar.map((elm, idx) => (
                            <MovieCard
                                key={idx + elm.title}
                                actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}
                                esFavorito={this.state.favoritos.includes(elm.id)}
                                peliculas={elm}
                            />
                        ))
                    }
                    </div>
                    <button onClick={()=>this.masPeliculas()}>CARGAR MAS PELICULAS</button>
            </section>
        );
    }
}

export default AllTop;