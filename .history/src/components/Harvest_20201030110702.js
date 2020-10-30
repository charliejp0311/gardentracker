import { Component } from "react";
import Plant from './Plant'
class Harvest extends Component{
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

export default Harvest;

    
    

