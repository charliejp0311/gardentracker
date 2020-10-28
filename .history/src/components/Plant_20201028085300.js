import { Component } from "react";
import CreateNote from "./CreateNote";

class Plant extends Component {
    state = {
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

export default Plant;