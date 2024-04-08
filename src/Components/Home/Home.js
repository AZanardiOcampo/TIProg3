import React, {component} from "react";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			datos: ''
		}
};

componentDidMount(){
	fetch('https://dh-movies.com/movies')
	.then( response => response.json() )
	.then( data => this.setState(
		{datos: data.image_url}
		))
	.catch( error =>	console.log('El error fue: ' + error))
	}
};

render();{
	return ( 
		<div>
		{this.state.datos === '' ?
		<h3>Cargando ...</h3> :
		<h3>{this.state.datos}</h3>}
		<p>Informacion recibida ACA</p>
		</div>
	)
}
