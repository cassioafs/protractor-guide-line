'use strict'
const ListagemPage = require('../../pages/listagem.po.js');
const POKEMON = require('../../data/db.js');

describe('Listagem de pokémons', ()=> {
  const listagemPage = new ListagemPage();
  it('Deve pesquisar um pokémon de acordo com o texto pesquisado', ()=>{
    listagemPage.visit();
    listagemPage.pesquisarPokemon('mew');
    expect(listagemPage.resultados.count()).toEqual(2);
  });
});  

describe('Inclusão de pokémons', ()=> {
  const listagemPage = new ListagemPage();
  it('Deve incluir um pokémon', ()=>{
    listagemPage.visit();
    listagemPage.incluirPokemon(POKEMON.new_pokemon);
    expect(listagemPage.resultados.count()).toEqual(6);
  });
});  