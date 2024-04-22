import React, { Component } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard';
import '../../Components/SearchResults/SearchResults.css'
import './Results.css'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
      peliculas: [],
      favoritos: []
    };
  }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
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
  render() {
    return (
      <div  className="Results">
          {
              this.state.peliculas.map((elm, idx) => (
                  <MovieCard
                      key={idx + elm.title}
                      actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}
                      esFavorito={this.state.favoritos.includes(elm.id)}
                      peliculas={elm}
                  />
              ))
          }
          </div>
    )
  }
    
}    

export default Results