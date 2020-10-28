import { Component } from "react";
import { connect } from "react-redux";

class CreatePlant extends Component {
    state = {
        name: '',
        notes: [],
    }

    handleChange=e=>{
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log(this.props)

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

const mapDispatchToProps= dispatch => {
    return{
        // addPlant: dispatch(addPlant())
    }
}


export default connect(null,mapDispatchToProps)(CreatePlant);