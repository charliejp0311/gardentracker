import {cuid} from 'cuid';

export default function garden (state = {
    plants: [],
    harvest: []
},action){
    switch (action.type) {
        case 'ADD_PLANT':
            return {
                ...state,
                plants: state.plants.concat({...action.plant, id: uuid()})
            };

        case 'HARVEST_PLANT':
            let p = state.plants.filter(plant=>plant.id===action.id) ;
            let inTheGarden = state.plants.filter(plant=>plant!==p);
            state.setState({plants: inTheGarden });
            return state.harvest.concat(action.plant);
    
        default:
            return state;
    }
};