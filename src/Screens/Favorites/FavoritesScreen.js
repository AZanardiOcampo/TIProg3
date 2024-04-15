import React from "react";
import { Component} from 'react';
import MovieCard from '../MovieCard/MovieCard'; 
import "../Home.css"

class Favorites extends Component{
    constructor(){
        super();
        this.state = {
            favoritos: [],
            peliculas: []
        };
    }
}

