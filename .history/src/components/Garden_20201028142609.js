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
        
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant addPlant={this.props.addPlant} />
                <PlantList plants={this.state.plants} />
                <Archive archive={this.state.archive} />
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
// const mapDispatchToProps = dispatch => {
//     return{
//         addPlant: dispatch(addPlant())
//     }
// }
export default connect(mapStateToProps)(Garden);