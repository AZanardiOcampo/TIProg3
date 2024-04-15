import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null, VerMas: false, favoritos: [] };    
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
            return <div>Loading...</div>;
        }
        
        return (
            <section>
                <div className='ContainerDetail'>
                    <article className="MovieCard">
                        <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={this.props.title} />
                        <h2>{data.title}</h2>
                        <p>Rating: {data.popularity}</p>
                        <p>Estreno: {data.release_date}</p>
                        <p>Duracion: {data.runtime}</p>
                        <p>Sinopsis: {data.overview}</p>
                            
                        <div className='genres'>Generos: {data.genres.map((elm, idx) => <p>{elm.name}</p>)}</div>

                        <div className="BotonesCard">
                            <button className="more" onClick={() => this.setState({ VerMas: !this.state.VerMas })}>Ver descripción</button>
                            <button className="AgregarFavs" onClick={() => this.actualizarFavoritos([...this.state.favoritos, this.props.id])}>Agregar a favoritos</button>
                        </div>
                        
                        <p></p>
                        {this.state.VerMas && (
                            <section className="extra">
                                <p>{data.overview}</p>
                            </section>
                        )}
                    </article>
                </div>
            </section>
        );
    }
}

export default MovieDetail;