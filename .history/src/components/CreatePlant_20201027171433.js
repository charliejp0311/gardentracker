import React from 'react';

export default function CreatePlant(props){
    return(
        <form onSubmit={props.handleSubmit}>
            <input type='text' onChange={props.handleChange} value={props.state} placeholder='Plant name'/>
            <label>Light Cycle</label>
            <select>
                <option value='12'>12</option>
                <option value='18'>18</option>
                <option value='24'>24</option>
            </select>
            <input type='submit'/>
        </form>
    )
}