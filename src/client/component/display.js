import React from 'react';
import ReactDom from 'react-dom';

import PokemonUpdate from './update.js';

class PokemonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false
        };
    }

    _deletePokemon = () => {
        this.props.deletePokemon(this.props.pokemon._id);
    }

    toggleUpdate = () => {
        this.setState({
            updating: !this.state.updating
        });
    }

    updatePokemon = () => {
        return (this.state.updating) ?
            <PokemonUpdate update={this.props.updatePokemon} toggle={this.toggleUpdate} pokemon={this.props.pokemon}/> :
            <h6>{this.props.pokemon.name}</h6>
    }

    render() {
        return (
            <div>
                {this.updatePokemon()}
                <button onClick={this.toggleUpdate}>Update Pokemon</button>
                <button onClick={this._deletePokemon}>Delete Pokemon</button>
            </div>
        )
    }
}

module.exports = PokemonDisplay;
