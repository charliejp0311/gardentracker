import { Component } from "react";
import { connect } from 'react-redux';

class harvestedPlant extends Component{
render(){
        // console.log(this.props)
        return(
            <div className='harvested-plant'>
                <h4>{this.props.plant.name}</h4>
                <p>description of the plant and link to plant itself</p>
            </div>
        )
    }


}
export default connect()(harvestedPlant);