import React from 'react';
import { Component} from 'react';
import AllTop from '../../Components/AllTop/AllTop';
import "../Home.css"

class AllTopScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div className="Alltop">
                <h1 class="h2-home">LAS MEJORES VALORADAS</h1>
                <AllTop/>
            </div>
        )
    }
}

export default AllTopScreen;