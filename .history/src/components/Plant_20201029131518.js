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
        let p2h = this.harvestPlant(this.props.plant)
        this.props.dispatch(p2h)
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