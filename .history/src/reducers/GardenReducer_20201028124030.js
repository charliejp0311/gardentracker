export default function garden (state = {
    plants: [],
    harvest: []
},action){
    switch (action.type) {
        case 'ADD_PLANT':
            return state.plants.concat(action.plant)

        case 'HARVEST_PLANT':
            let ps = state.plants.filter(plant=>plant.id!==action.id) 
            state.setState({plants: ps})
            return state.harvest.concat(action.plant)

        case 'DELETE_PLANT':

            return state;
    
        default:
            return state;
    }
};