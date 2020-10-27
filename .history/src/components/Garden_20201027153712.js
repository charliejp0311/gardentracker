import React, {Component} from 'react';
import logo from './sun-svgrepo-com.svg';

class Garden extends Component{

    render(){
        return(
            <div className='garden-container' >
                <h1>Garden Name<img src={logo} className="App-logo" alt="logo" /></h1>
                {/* <h1>{this.garden.name}</h1> */}
                {/* call all plants here */}
            </div>
        )
    }
}

export default Garden;