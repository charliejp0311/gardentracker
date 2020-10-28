import React, {Component} from 'react';
import { connect } from 'react-redux';
import Garden from './Garden';


class CreateGarden extends Component{
    //top element this is where I am connecting to my state/store
    //state has a list of current plants and a list of harvested plants
    //displays the GARDEN  

    state = {
        plants: [],
        harvest: []
    }


    
    render(){
        return(
            <div>
                <Garden 
                garden={this.state} 
                harvestPlant={this.harvestPlant}
                addPlant={this.addPlant}/>
            </div>
        )
    };
};


export default connect()(CreateGarden);