import {combineReducers} from 'redux';

import pokeReducer from './reducer.js';

const reducer = combineReducers({
    pokemon: pokeReducer
});

export default reducer;
