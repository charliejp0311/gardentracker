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
                <p>plant ... each plant will display in a grid with a rout to display the plant log
                </p>
                {/* all buttons need to call add note but with individual types the type will determine the action taken */}
                {/* <CreateNote /> */}

                <button>Display Plant Log</button>
                

            </div>
        )
    }
}

export default Plant;