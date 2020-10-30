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
        // console.log(this.props)
        return(
            <div className='plant'>
                <h3>{this.props.plant.name}</h3>
                <p>description of the plant and link to plant itself</p>
                <button>Track Plant</button>
                <button onClick={this.handleHarvest}>Harvest</button>
            </div>
        )
    }
}

export default connect()(Plant);