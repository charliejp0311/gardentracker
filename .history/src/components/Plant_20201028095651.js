

import React from 'react';

export default function CreatePlant(props){
    return(
        <form onSubmit={props.handleSubmit}>
            <input type='text' onChange={props.handleChange} value={props.state} placeholder='Plant name'/><br/>
            <input type='submit'/>
        </form>
    )
}