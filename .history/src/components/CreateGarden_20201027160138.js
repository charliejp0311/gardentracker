import React, {Component} from 'react';


class CreateGarden extends Component{

    state = {
        name: "",
        plants: []
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
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='garden name' onChange={this.handleChange}>{this.state.name}</input>
                <select>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                </select>
                <input type='submit' />
            </form>
        )
    };
};

export default CreateGarden;