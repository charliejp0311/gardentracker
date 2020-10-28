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
        this.props.addPlant({...this.state});
        this.setState({
            name: ''
        })

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