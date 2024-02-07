# Projeto React com TypeScript e Sass

Este é um projeto React desenvolvido com TypeScript e estilizado com Sass. O projeto utiliza uma API externa para obter dados de produtos. Devido a restrições de CORS (Cross-Origin Resource Sharing) na API fornecida, é necessário executar um servidor proxy para contornar esse bloqueio.

## Instruções de Instalação

- Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/en).

- Clone este repositório para o seu ambiente local:

```
git clone https://github.com/SrAbnerP/teste-vaga-front-end-jr.git
```

- Navegue até o diretório do projeto:

```
cd teste-vaga-front-end-jr
```

- Instale as dependências necessárias:

```
  npm install
```

## Executando o Servidor Proxy

Devido às restrições de CORS, é necessário executar um servidor proxy para contornar esse bloqueio e permitir a comunicação com a API fornecida.

- Navegue até o diretório 'src/api':

```
cd src/api
```

- Execute o servidor proxy usando o Node.js:

```
node proxy.js
```

O servidor proxy estará em execução e pronto para redirecionar as requisições para a API.

## Executando o Frontend

Com o servidor proxy em execução, você pode iniciar o frontend da aplicação.

- Volte para o diretório raiz do projeto, se ainda não estiver lá:

```
cd ../..
```

- Inicie o servidor de desenvolvimento com Vite:

```
npm run dev
```

A aplicação estará acessível em seu navegador no endereço http://localhost:5173.

## Considerações

- Certifique-se de que o servidor proxy esteja em execução sempre que você estiver desenvolvendo ou testando a aplicação para garantir o funcionamento correto das requisições à API.

-Este servidor proxy é uma solução temporária para contornar as restrições de CORS na API fornecida.
