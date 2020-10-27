import React from 'react';

const Helios = props =>{
    const stdCycles = [12,18,24]
    return(
        <form>
            <input type='dropdown' value={stdCycles} />
            <button onClick={()=>{props.logLight()}}></button>
        </form>
    );
}

export default Helios;