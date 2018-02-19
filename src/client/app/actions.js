import superagent from 'superagent';

const createPokemon = name => ({
    type:'CREATE_Pokemon',
    payload: name
});


const updatePokemon = payload => ({
    type: 'UPDATE_Pokemon',
    payload
});


const deletePokemon = id => ({
    type: 'DELETE_Pokemon',
    payload: id
});


const init = (payload) => ({
    type: 'INIT',
    payload
});



export const initDB = payload => dispatch => {
    superagent.get('http://localhost:3000/Pokemon').end((err, response) => {
        dispatch(init(response.body));
    });
}


export const PokemonCreate = payload => dispatch => {

    superagent.post('http://localhost:3000/Pokemon').send({name: payload}).end((err, response) => {
        dispatch(createPokemon(response.body));
    });

}

export const PokemonUpdate = payload => dispatch => {
    superagent.put(`http://localhost:3000/Pokemon/${payload._id}`).send(payload).end((err, response) => {
        dispatch(updatePokemon(response.body));
    });

}

export const PokemonDelete = payload => dispatch => {
    superagent.delete(`http://localhost:3000/Pokemon/${payload}`).end((err, response) => {
        dispatch(deletePokemon({id: response.body._id}));
    });

}
