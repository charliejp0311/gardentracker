import React from 'react';

const Helios = props =>{
    return(
        <form>
            <input type='text' />
            <button onClick={()=>{props.logLight()}}><img></img></button>
        </form>
    );
}

export default Helios;