import React, { Component } from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            VerMas: false,
            peliculas: [],
            favoritos: [],
        };
    }

    componentDidMount() {
        const id = this.props.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .catch(err => console.error(err));

        this.checkFavorite(id);
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
        const { data } = this.state;
        if (!data) {
            return <div>LOADING...</div>;
        }

        return (
            <section>
                <div className='ContainerDetail'>
                <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={data.title} />
                    <article className="MovieCard">
                        <h2 classname="h2-home">{data.title}</h2>
                        <div>
                            <p>RATING: {data.popularity}</p>
                            <p>ESTRENO: {data.release_date}</p>
                            <p>DURACION: {data.runtime}</p>
                            <p>SINOPSIS: {data.overview}</p>
                        </div>
                        <div className='genres'>GENEROS: {data.genres.map((elm, idx) => <p key={idx}>{elm.name}</p>)}</div>
                        <div className="BotonesCard">
                            { this.state.isFavorite ? 
                                <button className="AgregarFavs" onClick={() => this.sacarFavorito(data.id)}>Sacar de favoritos</button> :
                                <button className="AgregarFavs" onClick={() => this.agregarFavorito(data.id)}>Agregar a favoritos</button>
                            }
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}

export default MovieDetail;
