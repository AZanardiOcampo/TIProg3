import React, { Component } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerMas: false,
            favoritos: [],
            resultados: []
        };
    }
    evitarSubmit(event) {
        event.preventDefault();
    }

    checkFavorite = (id) => {
        let favorites = localStorage.getItem('favoritos');
        favorites = favorites ? JSON.parse(favorites) : [];
        this.setState({ isFavorite: favorites.includes(id) }); 
    }

    agregarFavorito = (id) => {
        const favorites = JSON.parse(localStorage.getItem('favoritos') || '[]');
        if (!favorites.includes(id)) {
            favorites.push(id);
            localStorage.setItem('favoritos', JSON.stringify(favorites));
            this.setState({ isFavorite: true });
        }
    }

    sacarFavorito = (id) => {
        let favorites = JSON.parse(localStorage.getItem('favoritos') || '[]');
        favorites = favorites.filter(elm => elm !== id);
        localStorage.setItem('favoritos', JSON.stringify(favorites));
        this.setState({ isFavorite: false });
    }


    render() {
        console.log(this.props.peliculas);
        const { peliculas } = this.props;
        if (!peliculas) {
            return <div>LOADING...</div>;
        }
        let storage = localStorage.getItem('favoritos');
        let isFavorite = false;

    if (storage) {
        let storageParsed = JSON.parse(storage);
        isFavorite = storageParsed.includes(peliculas.id);
    }
            return (
                <div>
                    <section className="Movies">
                            <article className="MovieCard" key={this.props.peliculas.id}>
                            <Link to={`/MovieDetail/id/${this.props.peliculas.id}`}><div className='imagen'>
                                <img src={`https://image.tmdb.org/t/p/w300/${this.props.peliculas.poster_path}/images`} alt={this.props.peliculas.title} />
                            </div>
                            </Link>
                            <Link to={`/MovieDetail/id/${this.props.peliculas.id}`}><h2 className='titulo'>{this.props.peliculas.title}</h2></Link>
                            <div className="BotonesCard">
                            <button className="more" onClick={() => this.setState({ VerMas: !this.state.VerMas })}>Ver descripción</button>
                            {   isFavorite ? 
                            <button className="AgregarFavs" onClick={() => this.sacarFavorito(peliculas.id)}>Sacar de favoritos</button> :
                            <button className="AgregarFavs" onClick={() => this.agregarFavorito(peliculas.id)}>Agregar a favoritos</button>
                            }
                            </div>
                            <p></p>
                            {this.state.VerMas && (
                                <section className="extra">
                                    <p>{this.props.peliculas.overview}</p>
                                </section>
                            )}
                           
                        </article>
                        </section>
                </div>
            );
        }


    }

export default MovieCard;
