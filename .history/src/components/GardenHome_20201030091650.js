import React, {Component} from 'react';
import { connect } from "react-redux";
import { renderList } from "./renderList";
// import Garden from './Garden';


class CreateGarden extends Component{ 

    render(){
        const {plants,harvest} = this.props.garden
        return(
            <div>
                <h1>Growing Plants to Grow</h1>
                <h3>Your garden contains {plants.length} plants.</h3>
                <renderList plants={plants}/>
                <p>Your garden has had {harvest.length} plants harvested.</p>
                <renderList plants={harvest}/>

                {/* <Garden /> */}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return{
        garden: state.garden
    }
}

export default connect(mapStateToProps)(CreateGarden);