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

    handleClick=e=>{
        console.log('you need to put a "plant route" here so you can goto the plant and add notes to the plant')
    }
    render(){
        // console.log(this.props)
        return(
            <div className='plant'>
                <h4>{this.props.plant.name}</h4>
                <p>description of the plant and link to plant itself</p>
                <button onClick={this.handleClick}>Track Plant</button>
                <button onClick={this.handleHarvest}>Harvest</button>
            </div>
        )
    }
}

export default connect()(Plant);