'use strict'

class Listagem{
  constructor(){
    this.filtro = element(by.model('PokemonsController.filtro'));
    this.resultados = element.all(by.repeater('item in PokemonsController.pokemons'));;
  }

  visit(){
    return browser.get('/#!/list');
  }
  pesquisarPokemonPorNome(nomePokemon){
    this.filtro.sendKeys(nomePokemon);
  }
}
module.exports = Listagem;