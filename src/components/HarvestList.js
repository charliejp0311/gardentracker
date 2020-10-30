import { Component } from "react";
import HarvestedPlant from './harvestedPlant'
class HarvestList extends Component{
    render(){
        const {harvest} = this.props
        let hPlants = harvest.map(plant=>{
            return(<HarvestedPlant plant={plant} />)
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

    
    

