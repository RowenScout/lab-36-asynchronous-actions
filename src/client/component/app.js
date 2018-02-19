
import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

import * as actions from '../app/actions.js';

import PokemonCreate from './create.js';
import PokemonDisplay from './display.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.init();
    }

    displayPokemons = () => {
        return Object.keys(this.props.state.pokemons).map(id => {
            return <PokemonDisplay key={id} updatePokemon={this.props.pokemonUpdate} deletePokemon={this.props.pokemonDelete} pokemon={this.props.state.pokemons[id]}/>;
        });
    }

    render() {
        return (
            <div>
                <PokemonCreate pokemonCreate={this.props.pokemonCreate}/>
                {this.displayPokemons()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, payload) => {

    return {
        pokemonCreate: payload => dispatch(actions.pokemonCreate(payload)),
        pokemonUpdate: payload => dispatch(actions.pokemonUpdate(payload)),
        pokemonDelete: payload => dispatch(actions.pokemonDelete(payload)),
        init: () => dispatch(actions.initDB())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
