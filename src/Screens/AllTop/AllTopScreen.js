import React from 'react';
import { Component} from 'react';
import AllTop from '../Components/AllTop/AllTop';
import "./Home.css"

class AllTop extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div className="Alltop">
                <h1>Todas las mas valoradas:</h1>
                <AllTop/>
            </div>
        )
    }
}

export default AllTop;