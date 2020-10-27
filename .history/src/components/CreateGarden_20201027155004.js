import React, {Component} from 'react';


class CreateGarden extends Component{
    handleSubmit = e => {
        e.preventDefault();
        
    }
    render(){
        const gardenType = ['indoor','outdoor']
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='garden name'></input>
                <input type='dropDown' value={gardenType}></input>
                <input type='submit' />
            </form>
        )
    }
}

export default CreateGarden;