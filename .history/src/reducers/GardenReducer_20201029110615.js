import {cuid} from 'cuid';

export default function garden (state = {
    plants: [],
    harvest: []
},action){
    console.log(action)
    switch (action.type) {
        case 'ADD_PLANT':
            return {
                plants: state.plants.concat({name: action.plant.name, id: cuid()})
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