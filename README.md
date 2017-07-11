# protractor-style-guide
Essa aplicação de Testes Automatizados servirá como Style Guide para testes e2e utilizando utilizando Protractor

### A arquitetura está configurada da seguinte forma
```
├── README.md
├── e2e
│   ├── cucumber-example
│   │   ├── features
│   │   │   ├── busca.pokemon.feature
│   │   │   ├── step_definitions
│   │   │   │   └── busca.pokemon.step.js
│   │   │   └── support
│   │   │       └── env.js
│   │   └── protractor.conf.js
│   ├── jasmine-example
│   │   ├── protractor.conf.js
│   │   └── specs
│   │       └── pokenon.spec.js
│   └── pages
│       └── listagem.po.js
└── package.json
```

A aplicação que vamos testar é uma aplicação simples que pode ser acessada pela url <https://pokedex-angularjs.herokuapp.com/#!/list>

***IMPORTANTE***

Apenas para fins de estudo, vamos utilizar duas formas de testarmos uma aplicação com Protractor. 
Cada uma delas possui seu arquivo específico de configuração (Obs.: Em aplicações reais não é aconselhável a utilizando de mais de um arquivo de configuração).

A primeira forma é utilizando <em>Cucumber</em>. Na pasta [e2e/cucumber-example](https://github.com/cassioafs/protractor-style-guide/tree/master/e2e/cucumber-example)
estão os testes utilizando cucumber integrado ao protractor.

A outra forma é utilizando <em>Jasmine</em>. Na pasta [e2e/jasmine-example](https://github.com/cassioafs/protractor-style-guide/tree/master/e2e/jasmine-example)
estão os testes utilizando jasmine.

