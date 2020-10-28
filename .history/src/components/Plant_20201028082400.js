import { Component } from "react";

class Plant extends Component {
    state = {
        notes: [],
        nutrients: []
    }

    render(){
        return(
            <div>
                <p>plant ... this will have buttons that add predetermined 
                notes thinking instead of bugs being a major thing Nutrients 
                should be first bugs can be added to the garden later</p>
                <button>Water note</button>
                <button>Nutrient Note...maybe a pop up with a small form for creating a nutrient name/qtyPerGal</button>
                <button>Lighting update if cycle changed to start a bloom or give the plant time to rest also popup with dropdown selectionand 'change' button for submit</button>

            </div>
        )
    }
}

export default Plant;