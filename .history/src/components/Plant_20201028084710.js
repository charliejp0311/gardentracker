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
                <p>plant ... this will have buttons that add predetermined <br/>
                   notes thinking instead of bugs being a major thing Nutrients <br/>
                   should be first bugs can be added to the garden later<br/>
                </p>
                {/* all buttons need to call add note but with individual types the type will determine the action taken */}
                <CreateNote />

            </div>
        )
    }
}

export default Plant;