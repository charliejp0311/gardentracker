import { Component } from "react";

class Plant extends Component{

    render(){
        return(
            <div className='plant'>
                <p>{this.props.plant.name}</p>
                <button>Harvest</button>
            </div>
        )
    }
}

export default Plant;