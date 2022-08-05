# OnBording

## Commits

utilize conventional commits [doc](https://www.conventionalcommits.org/en/v1.0.0/)

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
`feat:`
`build:`
`chore:`
`ci:` 
`docs:` 
`style:`
`refactor:`
`perf:`
`test:`


## CLIs

```
npm install -g jest-cli
```

## Dependencias 

```
npm i -D git-commit-msg-linter
```
> permite a padronização de commits de acordo com o Conventional Commits

```
npm i -D husky
```
> permite rodar hooks no terminar antes de fazer o push

```
npm i -D lint-staged
```
> permite rodar scripts nos arquivos que estao na nossa staged area

```
npm i -D jest @types/jest ts-jest
```
> permite configurar testes unitarios, junto com a biblioteca de typagens do typescript para o jest e ts-jest que faz a compilacao ts-> js para o Jest

