// display plants with button that takes you to the individual plant 
// a button to remove the plant from the garden and add to plant archive
import { Component } from "react";

class plantList extends Component{
    render(){
        const {plants} = this.props

        return(
            <div>
                {plants.map(plant=>{
                    return(
                        <div>
                        <b>{plant.name}</b>
                        <button>Display Plant</button>
                        <button>Archive Plant</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default plantList;