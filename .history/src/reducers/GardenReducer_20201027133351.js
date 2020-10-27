export default function garden (state = {
    plants: []
},action){
    switch (action.type) {
        case 'ADD_PLANT':
            
            break;
        case 'REMOVE_PLANT':

            break;
    
        default:
            return state;
    }
};