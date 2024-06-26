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
      this.setState({ isLoading: true });
      fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
        .then(res => res.json())
        .then(data => {
          this.setState({ peliculas: data.results, isLoading: false }); 
        })
        .catch(e => {
          console.log(e);
          this.setState({ isLoading: false });
        });
    }

    actualizarFavoritos(arrayStorage) {
      this.setState({ favoritos: arrayStorage });
    }
  
    render() {
      const { isLoading } = this.state;
      if (isLoading) {
        return <div>LOADING...</div>;
      }
    return (
      <section>
        <h1>RESULTADOS DE BUSQUEDA</h1>
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
      </section>
    )
  }
    
}    

export default Results