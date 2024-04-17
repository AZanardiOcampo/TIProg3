import React, { Component } from 'react';
import './MovieDetail.css'

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: null, 
            VerMas: false,
            favoritos: [] };    
    }

    componentDidMount() {
       let id = this.props.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
        .then(response => response.json())
        .then(data => {
            this.setState({ data }); 
        })
        .catch(err => console.error(err));
    }

    actualizarFavoritos(arrayStorage) {
        this.setState({ favoritos: arrayStorage });
    }

    render() {
        const { data } = this.state;
        if (!data) {
            return <div>LOADING...</div>;
        }
        
        return (
            <section>
                <div className='ContainerDetail'>
                <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={this.props.title} />
                    <article className="MovieCard">
                        <h2 classname="h2-home">{data.title}</h2>
                        <div>
                        <p>RATING: {data.popularity}</p>
                        <p>ESTRENO: {data.release_date}</p>
                        <p>DURACION: {data.runtime}</p>
                        <p>SINOPSIS: {data.overview}</p>
                        </div>
                    
                        <div className='genres'>GENEROS: {data.genres.map((elm, idx) => <p>{elm.name}</p>)}</div>
                        <div className="BotonesCard">
                            <button className="AgregarFavs" onClick={() => this.actualizarFavoritos([...this.state.favoritos, this.props.id])}>Agregar a favoritos</button>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}

export default MovieDetail;