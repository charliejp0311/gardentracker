import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import PlantList from './plantList';
import Harvest from "./Harvest";
import {connect} from 'react-redux';


class Garden extends Component{

    render(){
        // console.log(this.props)
        return(
            <div >
                <CreatePlant />
                <PlantList plants={this.props.garden.plants} />
                {/* <Harvest harvest={this.state.harvest} /> */}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    // console.log(state)
    return{
        garden: state.garden
    }
}


export default connect(mapStateToProps)(Garden);