import { Component } from "react";

class Archive extends Component{
    render(){
        const {plants} = this.props

        return(
            <div>
                {/* {plants.map(plant=>{
                    return(
                        <div>
                        <b>{plant.name}</b>
                        <button>Display Plant</button>
                        <button>Archive Plant</button>
                        </div>
                    )
                })} */}
            </div>
        )
    }
}

export default Archive;