'use strict'

class ListagemPage{
  constructor(){
    this.filtro = element(by.model('PokemonsController.filtro'));
    this.resultados = element.all(by.repeater('item in PokemonsController.pokemons'));;
  }

  visit(){
    return browser.get('/#!/list');
  }

  pesquisarPokemon(nome){
    return this.filtro.sendKeys(nome);
  }

}
module.exports = ListagemPage;