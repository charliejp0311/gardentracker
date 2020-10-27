import React from 'react';

export default function CreatePlant(){
    return(
        <form onSubmit={this.props.handleSubmit}>
            <input type='text' onChange={this.props.handleChange} value={this.props.state} placeholder='Plant name'></input>
            <input type='submit'/>
        </form>
    )
}