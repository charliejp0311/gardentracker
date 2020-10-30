import React, {Component} from 'react';
import CreatePlant from './CreatePlant';
import HarvestList from './HarvestList';
import {connect} from 'react-redux';


class Garden extends Component{

    render(){
        // console.log(this.props)
        return(
            <div className='garden-container' >
                <h2>Add to your garden!</h2>
                <CreatePlant />
                <PlantList plants={this.props.garden.plants} />
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