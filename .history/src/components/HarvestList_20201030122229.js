import { Component } from "react";
import harvestedPlant from './harvestedPlant'
class HarvestList extends Component{
    render(){
        // console.log(this.props)
        const {harvest} = this.props
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

    
    

