import { Component } from "react";
import { connect } from 'react-redux';

class Plant extends Component{

    harvestPlant=(plant)=>{
        return{
            type: 'HARVEST_PLANT',
            plant
        }
    }

    render(){
        return(
            <div className='plant'>
                <p>{this.props.plant.name}</p>
                <button>Harvest</button>
            </div>
        )
    }
}

export default connect()(Plant);