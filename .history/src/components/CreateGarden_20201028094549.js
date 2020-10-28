import React, {Component} from 'react';
import { connect } from 'react-redux';
import Garden from './Garden';


class CreateGarden extends Component{

    state = {
        plants: [],
        notes: [],
        nutrients: [],
        archive: []
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
                notes={this.state.notes} 
                nutrients={this.state.nutrients}
                archive={this.state.archive} />
            </div>
        )
    };
};



export default connect()(CreateGarden);