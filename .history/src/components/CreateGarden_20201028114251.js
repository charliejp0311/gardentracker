import React, {Component} from 'react';
import { connect } from 'react-redux';
import Garden from './Garden';


class CreateGarden extends Component{

    state = {
        plants: [],
        harvest: []
    }

    addPlant=(plant)=>{
        return({
        type: "ADD_PLANT",
        plant
        })
    };
    
    render(){
        return(
            <div>
                <Garden 
                plants={this.state.plants} 
                nutrients={this.state.nutrients}
                archive={this.state.archive} 
                addPlant={this.addPlant}/>
            </div>
        )
    };
};


export default connect()(CreateGarden);