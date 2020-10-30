import React, {Component} from 'react';
import { connect } from "react-redux";
// import Garden from './Garden';


class CreateGarden extends Component{ 

    render(){
        return(
            <div>
                <h1>Growing is Life</h1>
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