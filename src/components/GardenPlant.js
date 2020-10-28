

import React from 'react';

export default function GardenPlant(props){
    return(
        <div className='plant'>
            <b>{props.name}</b>
            <button>Display</button>
            <button>Archive</button>
            <button>Delete</button>
        </div>
    )
}