<h1 align="center">
    <img alt="CGNAT Manager" width="500px" src="../.github/logo.png" />
</h1>

<h4 align="center">
  🚀 TCC do Curso de Ciência da Computação
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guuhx97/cgnat-manager">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <img alt="License" src="https://img.shields.io/badge/version-1.0.15-blue.svg?cacheSeconds=2592000">
  <img alt="License" src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg">
  <img alt="License" src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg">
  <img alt="License" src="https://img.shields.io/badge/Kernel-2.4-blue.svg?cacheSeconds=2592000">

</p>

## 📰 Back-end

No back-end ou API, é onde de fato as funções de cadastro, busca, entre outras são executadas. É responsabilidade dele também realizar a integração com bando de dados inserindo e buscando informações. Por default, a API está utilizando a porta `3333`, mas que pode ser alterada no arquivo **server.js**.


## 🌱 Rotas
| Rota | Método | Função | Descrição |
| :--- | :--- | :--- | :---|
| `/home` | `GET` | `HomeController.index` | `Busca informações do sistema Linux que está rodando o cgnat-manager;` |
| `/setting` | `GET` | `SettingController.index` | `Busca configurações de endereço feitas no sistema de CGNAT;` |
| `/setting` | `POST` | `SettingController.store` | `Realiza de fato as configurações de CGNAT no sistema;` |
| `/logs` | `GET` | `LogsController.index` | `Busca os logs da aplicação;` |
| `/address` | `GET` | `AdressController.index` | `Realiza os calculos de sub-rede para que seja possível realizar as quebra de classe; ` |
| `/login` | `POST` | `LoginController.index` | `Realiza o login do usuário na aplicação;` |

-------------------------

## 🔄 Executar
- Entrar na pasta `backend`;
 - Executar `yarn install` para instalar dependências do projeto;
 - Executar `yarn dev` para que o projeto seja executado;

 ## 📝 Licença
Este projeto está sobre a licença MIT. Veja o arquivo [LICENSE](../LICENSE.md) para mais detalhes.

---
<h4 align="center">
  Feito com ❤️ by Gustavo Souza
</h4>
