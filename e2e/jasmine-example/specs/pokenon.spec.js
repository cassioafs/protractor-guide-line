'use strict'
const ListagemPage = require('../../pages/listagem.po.js');

describe('Listagem de pokémons', ()=> {
  const listagemPage = new ListagemPage();
  it('Deve pesquisar um pokémon de acordo com o texto pesquisado', ()=>{
    listagemPage.visit();
    listagemPage.filtro.sendKeys('mew');
    expect(listagemPage.resultados.count()).toEqual(2);
  });
});  