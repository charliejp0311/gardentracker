import React from 'react';
export default renderList(plants){
    let liWrap = plants.map(a=>{return <li>{a.name}</li>})
    return(
        <ul>{liWrap}</ul>
    )
}