import { Component } from "react";

class CreatePlant extends Component {
    state = {
        name: '',
        notes: [],
        nutrients: []
    }

    render(){
        return(
            <div>
                <p>
                    plant ... each plant will display in a grid with a rout to display the plant log
                </p>
                
                <button>Display Plant Log/Notes</button>
                

            </div>
        )
    }
}

export default CreatePlant;