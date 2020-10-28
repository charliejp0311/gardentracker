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

    render(){
        console.log(props)
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant addPlant={this.props.addPlant} harvestPlant={this.props.harvestPlant} />
                <PlantList plants={this.state.plants} />
                <Harvest harvest={this.state.harvest} />
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        plants: state.plants,
        harvest: state.harvest
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addPlant: dispatch(addPlant()),
        harvestPlant: dispatch(harvestPlant())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Garden);