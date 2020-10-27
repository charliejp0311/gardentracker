import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import Plant from './Plant';
import {connect} from 'react-redux';


class Garden extends Component{

    render(){
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant />
                {/* call all plants here */}
            </div>
        )
    }
}
const mapStateToProps = state => {
    this.setState({
        plants: state.plants,
        notes: state.notes,
        bugs: state.bugs
    })
}

export default connect(mapStateToProps)(Garden);