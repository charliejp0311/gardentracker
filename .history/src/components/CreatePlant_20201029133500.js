import { Component } from "react";
import { connect } from "react-redux";

class CreatePlant extends Component {
    state = {
        name: '',
        notes: []
    }

    handleChange=e=>{
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault();
        let act = this.addPlant(this.state);
        this.props.dispatch(act);
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

    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder="Plant Name" onChange={this.handleChange} value={this.state.name}/>
                <input type='submit' value='Add Plant'/>
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