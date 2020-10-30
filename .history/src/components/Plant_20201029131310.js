import { Component } from "react";
import { connect } from 'react-redux';

class Plant extends Component{

    harvestPlant=(plant)=>{
        return{
            type: 'HARVEST_PLANT',
            plant
        }
    }

    handleHarvest=e=>{
        return this.props.dispatch(this.harvestPlant(this.props.plant))
    };
    render(){
        console.log(this.props)
        return(
            <div className='plant'>
                <p>{this.props.plant.name}</p>
                <button onClick={this.handleHarvest}>Harvest</button>
            </div>
        )
    }
}

export default connect()(Plant);