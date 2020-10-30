import { Component } from "react";
import harvestedPlant from './harvestedPlant'
class HarvestList extends Component{
    render(){
        console.log(this.props)
        const {harvest} = this.props
        let showPlants = harvest.map(plant=>{
            return(
                <harvestedPlant plant={plant} />
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

export default HarvestList;

    
    

