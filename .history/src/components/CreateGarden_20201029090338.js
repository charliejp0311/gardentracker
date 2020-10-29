import React, {Component} from 'react';
// import { connect } from 'react-redux';
import Garden from './Garden';


class CreateGarden extends Component{ 

    // state = {
    //     plants: [],
    //     harvest: []
    // }

    render(){
        return(
            <div>
                <Garden />
            </div>
        )
    };
};


export default (CreateGarden);