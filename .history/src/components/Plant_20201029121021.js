import { Component } from "react";

class Plant extends Component{

    render(){
        return(
            <div className='plant'>
                <p>{this.props.plant.name}</p>
            </div>
        )
    }
}

export default Plant;