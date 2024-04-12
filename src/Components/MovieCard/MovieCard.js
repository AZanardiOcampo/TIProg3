import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

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

    render() {
        console.log(this.props.peliculas);
            return (
                <div>
                    <h2 className="TextoPeliculas">Peliculas Populares</h2>
                    <Link to="/Alltop">Ver todas</Link>
                    <section className="PopularMovies">
                        <article className="MovieCard" key={this.props.peliculas.id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${this.props.peliculas.poster_path}/images`} alt={this.props.peliculas.title} />
                            <h2>{this.props.peliculas.title}</h2>
                            <button className="more" onClick={() => this.setState({ VerMas: !this.state.VerMas })}>Ver más</button>
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
