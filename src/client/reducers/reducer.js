export default (state = {}, action) => {
    let {type, payload} = action;
    let newState = {...state};
    switch(type) {
        case 'CREATE_POKEMON':

            newState[payload._id] = payload;
            return newState;

        case 'UPDATE_POKEMON':
            newState[payload._id].name = payload.name;
            return newState;

        case 'DELETE_POKEMON':
            delete newState[payload.id];
            return newState;

        case 'INIT':
            payload.map(pokemon => newState[pokemon._id] = pokemon);
            return newState;

        default:
            return newState
    }

}
