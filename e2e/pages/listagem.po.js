'use strict'

class ListagemPage{
  constructor(){
    this.filtro = element(by.dataTest('filtro'));
    this.resultados = element.all(by.repeater('item in PokemonsController.pokemons'));;
    this.btnAdicionar = element(by.linkText('Adicionar'));
    this.numero = element(by.model('PokemonsController.pokemon.id')); 
    this.nome = element(by.model('PokemonsController.pokemon.name')); 
    this.ataque = element(by.model('PokemonsController.pokemon.attack')); 
    this.defesa = element(by.model('PokemonsController.pokemon.defense')); 
    this.hp = element(by.model('PokemonsController.pokemon.hp')); 

    this.btnSalvar = element(by.buttonText('Salvar'));

    this.modalCampos = element(by.id('myModal'));

  }

  visit(){
    return browser.get('/#!/list');
  }

  pesquisarPokemon(nome){
    return this.filtro.sendKeys(nome);
  }

  incluirPokemon(pokemon){
    this.btnAdicionar.click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(this.modalCampos));

    this.numero.sendKeys(pokemon.numero);
    this.nome.sendKeys(pokemon.nome);
    this.ataque.sendKeys(pokemon.ataque);
    this.defesa.sendKeys(pokemon.defesa);
    this.hp.sendKeys(pokemon.hp);
    this.btnSalvar.click();

  }

}
module.exports = ListagemPage;