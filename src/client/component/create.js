import React from 'react';
import ReactDom from 'react-dom';

class PokemonCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    captureName = (e) => {
        this.setState({name: e.target.value});
    }
    createPokemon = (e) => {
        e.preventDefault();
        this.props.pokemonCreate(this.state.name);
    }

    render() {
        return (
            <form>
                <input onChange={this.captureName} placeholder="Enter pokemon name"/>
                <button onClick={this.createPokemon}>Create Pokemon</button>
            </form>
        )
    }
}

module.exports = PokemonCreate;
