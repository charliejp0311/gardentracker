default export function renderList(array){
    let liWrap = array.map(a=>{return <li>{a}</li>})
    return(
        <ul>{liWrap}</ul>
    )
}