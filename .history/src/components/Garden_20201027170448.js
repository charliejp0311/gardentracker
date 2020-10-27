import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import Plant from './Plant';
import {connect} from 'react-redux';


class Garden extends Component{
    state = {
        plants: []
    }

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
const mapPropsToState = props => {
    this.setState({
        plants: props.plants,
    })
}

export default connect(mapPropsToState)(Garden);