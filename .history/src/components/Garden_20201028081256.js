import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import Plant from './Plant';
import {connect} from 'react-redux';


class Garden extends Component{

    state = {
        plants: [],
    }

    render(){
        // let allPlants = this.state.plants.map(plant=>{return(
        //     <Plant key={plant.id} plant={plant} notes={this.props.notes} nutrients={this.props.nutrients} />
        // )})
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant  />
                <Plant notes={this.props.notes} nutrients={this.props.nutrients}/>
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