import React, {Component} from 'react';
import { connect } from "react-redux";

class CreateGarden extends Component{ 

    render(){
        const {plants,harvest} = this.props.garden
        return(
            <div >
                <h1>Growing Plants to Grow</h1>
                <h3>Your garden contains {plants.length} plants.</h3>
                <ul>
                {plants.map(plant=>{return <li>{plant.name}</li>})}
                </ul>
                <p>Your garden has had {harvest.length} plants harvested.</p>
                <ul>
                {harvest.map(plant=>{return <li>{plant.name}</li>})}
                </ul>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return{
        garden: state.garden
    }
}

export default connect(mapStateToProps)(CreateGarden);