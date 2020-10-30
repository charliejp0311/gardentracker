import { Component } from "react";
import Plant from './Plant'
class Harvest extends Component{
    render(){
        console.log(this.props)
        const {harvest} = this.props
        let showPlants = harvest.map(plant=>{
            return(
                <Plant plant={plant} />
            )
        });
        return(
            <div className='harvest'>
                <h3>Harvested</h3>
                {showPlants}
            </div>
        )
    }
}

export default Harvest;

    
    

