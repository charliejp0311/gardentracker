import { Component } from "react";
import { connect } from "react-redux";

class CreatePlant extends Component {
    state = {
        name: '',
    }

    handleChange=e=>{
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault();
        this.props.dispatch(this.addPlant(this.state));
        this.setState({
            name: ''
        })

    }

    addPlant=(plant)=>{
        return({
        type: "ADD_PLANT",
        plant
        })
    };

    harvestPlant=(plant)=>{
        return{
            type: 'HARVEST_PLANT',
            plant
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder="Plant Name" onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
        )
    }
}

const mapStateToProps = state => { 
    return {
        plants: state.plants,
        harvest: state.harvest
    }
}

// const mapDispatchToProps= dispatch => {
//     return{
//         // addPlant: ()=>dispatch(addPlant()),
//         // harvestPlant: ()=>dispatch(harvestPlant())
//     }
// }


export default connect(mapStateToProps)(CreatePlant);