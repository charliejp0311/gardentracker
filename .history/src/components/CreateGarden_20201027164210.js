import React, {Component} from 'react';
import { connect } from 'react-redux';
import Garden from './Garden';


class CreateGarden extends Component{

    state = {
        plants: [],
        notes: [],
        bugs: []
    }

    handleSubmit = e => {
        e.preventDefault();

    };

    handleChange = e =>{
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Garden />
            </div>
        )
    };
};



export default connect()(CreateGarden);