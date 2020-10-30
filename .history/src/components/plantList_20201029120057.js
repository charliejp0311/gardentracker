// display plants with button that takes you to the individual plant 
// a button to remove the plant from the garden and add to plant archive
import { Component } from "react";

class PlantList extends Component{
    render(){
        console.log(this.props)
        const {plants} = this.props
        let showPlants = plants.map(plant=>{
            return(
            <div className='plant'>
                {plant.name}
            </div>
            )
        });
        return(
            <div>
                {showPlants}
            </div>
        )
    }
}

export default PlantList;