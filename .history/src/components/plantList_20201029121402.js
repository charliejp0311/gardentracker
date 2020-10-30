// display plants with button that takes you to the individual plant 
// a button to remove the plant from the garden and add to plant archive
import { Component } from "react";
import Plant from './Plant'

class PlantList extends Component{
    render(){
        console.log(this.props)
        const {plants} = this.props
        let showPlants = plants.map(plant=>{
            return(
                <Plant plant={plant} />
            )
        });
        return(
            <div className='garden'>
                {showPlants}
            </div>
        )
    }
}

export default PlantList;