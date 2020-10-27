import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import Plant from './Plant';
import {connect} from 'react-redux';


class Garden extends Component{
    
    render(){
        let allPlants = this.state.plants.map(plant=>{return(
            <Plant key={plant.id} plant={plant} />
        )})
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant />
                {allPlants}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        plants: state.plants,
        notes: state.notes,
        bugs: state.bugs
    }
}

export default connect(mapStateToProps)(Garden);