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