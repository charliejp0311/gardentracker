import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import PlantList from './plantList';
import Harvest from "./Harvest";
import {connect} from 'react-redux';


class Garden extends Component{

    state = {
        plants: [],
        harvest: []
    }
    addPlant=(plant)=>{
        return(this.props.dispatch({
        type: "ADD_PLANT",
        plant
        }))
    };

    harvestPlant=(plant)=>{
        return{
            type: 'HARVEST_PLANT',
            plant
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant addPlant={this.props.dispatch(this.addPlant)} harvestPlant={this.harvestPlant} />
                {/* <PlantList plants={this.state.plants} />
                <Harvest harvest={this.state.harvest} /> */}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        plants: state.plants,
        harvest: state.harvest,
    }
}

export default connect(mapStateToProps)(Garden);