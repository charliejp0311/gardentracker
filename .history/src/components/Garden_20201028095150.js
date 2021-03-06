import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import plantList from './plantList';
import Archive from "./Archive";
import {connect} from 'react-redux';


class Garden extends Component{

    state = {
        plants: [],
        archive: [],
        nutrients: []
    }

    render(){
        
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant  />
                <plantList plants={this.state.plants} />
                <Archive archive={this.state.archive} />
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        plants: state.plants,
        archive: state.archive,
        nutrients: state.nutrients
    }
}

export default connect(mapStateToProps)(Garden);