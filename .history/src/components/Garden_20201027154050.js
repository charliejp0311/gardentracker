import React, {Component} from 'react';


class Garden extends Component{

    render(){
        return(
            <div className='garden-container' >
                <h1>Garden Name<img src={this.props.logo} className="App-logo" alt="logo" /></h1>
                {/* <h1>{this.garden.name}</h1> */}
                {/* call all plants here */}
            </div>
        )
    }
}

export default Garden;