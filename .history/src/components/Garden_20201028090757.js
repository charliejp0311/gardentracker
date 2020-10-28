import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import plantList from './plantList';
import {connect} from 'react-redux';


class Garden extends Component{

    state = {
        plants: [],
        notes: [],
        nutrients: []
    }

    render(){
        // let allPlants = this.state.plants.map(plant=>{return(
        //     <Plant key={plant.id} plant={plant} notes={this.props.notes} nutrients={this.props.nutrients} />
        // )})
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant  />
                <plantList plants={this.state.plants}/>
                {/* {allPlants} */}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        plants: state.plants,
        notes: state.notes,
        nutrients: state.nutrients
    }
}

export default connect(mapStateToProps)(Garden);