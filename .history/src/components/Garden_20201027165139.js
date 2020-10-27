import React, {Component} from 'react';
import CreatePlant from './CreatePlant';


class Garden extends Component{

    render(){
        return(
            <div className='garden-container' >
                <h1>Growing is Life</h1>
                <CreatePlant />
                {/* call all plants here */}
            </div>
        )
    }
}

export default Garden;