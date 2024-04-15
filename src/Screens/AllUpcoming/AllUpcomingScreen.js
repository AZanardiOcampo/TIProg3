import React from 'react';
import { Component} from 'react';
import AllUpcoming from '../../Components/AllUpcoming/AllUpcoming';
import "../Home.css"

class AllUpcomingScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div className="AllUpcoming">
                <h1>Proximamente:</h1>
                <AllUpcoming/>
            </div>
        )
    }
}

export default AllUpcomingScreen;