import React, { Component } from 'react';
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

    favoritos(id){
        localStorage.setItem('favoritos', JSON.stringify() + id);
        let favs = JSON.parse(localStorage.getItem("favoritos"));
        console.log(favs);
        if (favs.indexOf(id) === -1 ) {
            this.setState({  
                favoritos : [this.state.favoritos , id]  
            }); 
        } else{
            alert("Esta pelicula ya esta en favoritos");
        }
    }
    evitarSubmit(event) {
        event.preventDefault();
    }

    render() {
        console.log(this.props.peliculas);
            return (
                <div>
                    <section className="Movies">
                        <article className="MovieCard" key={this.props.peliculas.id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${this.props.peliculas.poster_path}/images`} alt={this.props.peliculas.title} />
                            <h2>{this.props.peliculas.title}</h2>
                            <div className="BotonesCard">
                            <button className="more" onClick={() => this.setState({ VerMas: !this.state.VerMas })}>Ver descripción</button>
                            <button className="AgregarFavs" onClick={() => this.state.favoritos.push(this.props.peliculas.id)}>Agregar a favoritos</button>
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
