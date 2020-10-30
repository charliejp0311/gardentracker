import React from 'react';
export default function renderList(plants){
    let liWrap = plants.map(a=>{return <li>{a.name}</li>})
    return(
        <ul>{liWrap}</ul>
    )
}