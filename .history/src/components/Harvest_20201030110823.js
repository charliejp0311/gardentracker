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
            <div className='garden'>
                {showPlants}
            </div>
        )
    }
}

export default Harvest;

    
    

