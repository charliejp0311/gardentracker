export default function garden (state = {
    plants: []
},action){
    switch (action.type) {
        case 'ADD_GARDEN':
            
            break;
        case 'REMOVE_GARDEN':

            break;
    
        default:
            return state;
    }
};