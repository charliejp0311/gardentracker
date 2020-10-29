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
        console.log(this.props)
        this.props.addPlant({name: this.state.name});
        this.setState({
            name: ''
        })

    }
    render(){
        console.log(this.props)
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

const mapDispatchToProps= dispatch => {
    return{
        addPlant: ()=>dispatch(this.props.addPlant()),
        harvestPlant: ()=>dispatch(this.props.harvestPlant())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreatePlant);