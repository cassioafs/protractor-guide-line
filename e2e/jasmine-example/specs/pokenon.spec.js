'use strict'
const Listagem = require('../pages/listagem.po.js');

describe('Listagem de pokemons',function(){
  const listagem = new Listagem();
  it('Deve pesquisar um pokemon de acordo com o texto pesquisado',function(){
    listagem.visit();
    listagem.filtro.sendKeys('mew');
    expect(listagem.resultados.count()).toEqual(2);
  });

  
});  