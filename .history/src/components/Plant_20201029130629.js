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
                <button onClick={()=>this.props.dispatch(this.harvestPlant)}>Harvest</button>
            </div>
        )
    }
}

export default connect()(Plant);