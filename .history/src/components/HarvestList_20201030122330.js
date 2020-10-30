import { Component } from "react";
import harvestedPlant from './harvestedPlant'
class HarvestList extends Component{
    render(){
        const {harvest} = this.props
        console.log(harvest)
        let hPlants = harvest.map(plant=>{
            return(
                <harvestedPlant key={plant} plant={plant} />
            )
        });
        return(
            <div className='harvest'>
                <h3>Harvested</h3>
                {hPlants}
            </div>
        )
    }
}

export default HarvestList;

    
    

