import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard';

export default class Results extends Component {
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({ peliculas: data.results });
            })
            .catch(e => console.log(e));
        }
  render() {
    return (
      <div>
        <MovieCard
                            key={idx + elm.title}
                            actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}
                            esFavorito={this.state.favoritos.includes(elm.id)}
                            peliculas={elm} 
                        />
      </div>
    )
  }
    
}    
