'use strict'
const ListagemPage = require('../../pages/listagem.po.js');

describe('Listagem de pokemons', ()=> {
  const listagemPage = new ListagemPage();
  it('Deve pesquisar um pokemon de acordo com o texto pesquisado', ()=>{
    listagemPage.visit();
    listagemPage.filtro.sendKeys('mew');
    expect(listagemPage.resultados.count()).toEqual(2);
  });
});  