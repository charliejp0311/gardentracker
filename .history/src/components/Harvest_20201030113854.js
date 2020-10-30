import React, {Component} from 'react';
import HarvestList from './HarvestList';
import {connect} from 'react-redux';


class Harvest extends Component{

    render(){
        // console.log(this.props)
        return(
            <div className='garden-container' >
                <h2>Wow look at all you've grown!</h2>
                <HarvestList harvest={this.props.garden.harvest} />
            </div>
        )
    }
}
const mapStateToProps=state=>{
    // console.log(state)
    return{
        garden: state.garden
    }
}


export default connect(mapStateToProps)(Harvest);