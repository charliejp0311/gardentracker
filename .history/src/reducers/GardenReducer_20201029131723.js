export default function garden (state = {
    plants: [{name: 'Tomato'},{name: 'Kamote'},{name: 'Jalapeno'},{name: 'Cucumber'}],
    harvest: []
},action){
    console.log(action)
    switch (action.type) {
        case 'ADD_PLANT':
            return {
                ...state,
                plants: state.plants.concat({name: action.plant.name})
            };

        case 'HARVEST_PLANT':
            let p = state.plants.filter(plant=>plant.id===action.id) ;
            let inTheGarden = state.plants.filter(plant=>plant!==p);
            
            return{
                plants: inTheGarden,
                harvest: state.harvest.concat(p)
            };
    
        default:
            return state;
    }
};