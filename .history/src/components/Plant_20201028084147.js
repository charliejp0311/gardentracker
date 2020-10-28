import { Component } from "react";

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
                <button>Water note</button><br/>
                <button>Nutrient Note</button><br/>
                <button>Lighting update</button><br/>

            </div>
        )
    }
}

export default Plant;