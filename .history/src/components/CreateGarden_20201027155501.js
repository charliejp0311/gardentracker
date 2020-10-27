import React, {Component} from 'react';


class CreateGarden extends Component{
    handleSubmit = e => {
        e.preventDefault();

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='garden name'></input>
                <select>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                </select>
                <input type='submit' />
            </form>
        )
    }
}

export default CreateGarden;