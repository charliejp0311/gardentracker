import React, {Component} from 'react';
import { connect } from "react-redux";
// import Garden from './Garden';


class CreateGarden extends Component{ 

    render(){
        return(
            <div>
                <h1>Growing Plants to grow and feed yourself mentally and physically</h1>
                <h3>Your garden contains {this.props.garden.plants.length}</h3>
                <p>Your garden has had {this.props.garden.harvest.length} plants harvested</p>
                {/* <Garden /> */}
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