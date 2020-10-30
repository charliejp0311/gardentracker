import { Component } from "react";
import harvestedPlant from './harvestedPlant'
class HarvestList extends Component{
    render(){
        const {harvest} = this.props
        let hPlants = harvest.map(plant=>{
            return(<harvestedPlant plant={plant} />)
        });
        console.log(hPlants)
        return(
            <div className='harvest'>
                <h3>Harvested plants</h3>
                {hPlants}
            </div>
        )
    }
}

export default HarvestList;

    
    

