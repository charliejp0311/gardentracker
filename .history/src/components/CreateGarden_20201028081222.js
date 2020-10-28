import React, {Component} from 'react';
import { connect } from 'react-redux';
import Garden from './Garden';


class CreateGarden extends Component{

    state = {
        plants: [],
        notes: [],
        nutrients: []
    }
    
    render(){
        return(
            <div>
                <Garden 
                plants={this.state.plants} 
                notes={this.state.notes} 
                bugs={this.state.nutrients} />
            </div>
        )
    };
};



export default connect()(CreateGarden);