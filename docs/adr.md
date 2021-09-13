# ADR - anotações de decisões de arquitetura
[O que é ADR?](https://adr.github.io/)

- 01: Branching
Optei por utilizar somente a main por ser a alternativa sensata para um trabalho sozinho e pequeno.
Em um projeto real eu opto/optaria por utilizar [Github Flow](https://guides.github.com/introduction/flow/).

- 02: Estrutura de pastas
Optei por utilizar uma estrutura de serviços e views, onde views são compostas de pages e componentes.
É uma estrutura simples e organizada.

- 03: Lib para fetch
Optei por utilizar o SWR, lib da Vercel para ter um controle melhor dos 'error boundaries'/estados de carregamento.
