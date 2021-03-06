import { Component } from "react";
import harvestedPlant from './harvestedPlant'
class HarvestList extends Component{
    render(){
        const {harvest} = this.props
        let i = -1
        let hPlants = harvest.map(plant=>{
            i += 1
            return(
                <harvestedPlant key={i} plant={plant} />
                )
        });
        console.log(hPlants)
        return(
            <div className='harvest'>
                <h3>Harvested</h3>
                {hPlants}
            </div>
        )
    }
}

export default HarvestList;

    
    

