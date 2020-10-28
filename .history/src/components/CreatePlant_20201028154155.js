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
        // debugger
        this.props.addPlant({name: this.state.name});
        this.setState({
            name: ''
        })

    }
    render(){
        // console.log(this)
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
        plants: state.garden.plants,
        harvest: state.garden.harvest
    }
}

// const mapDispatchToProps= dispatch => {
//     return{
//         // addPlant: dispatch(addPlant())
//     }
// }


export default connect(mapStateToProps)(CreatePlant);