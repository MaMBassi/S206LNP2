# S206L

# Framework
Cypress Desktop

# IDE
Visual Studio Code

# Browser
Chrome

# Site
https://automationintesting.online/

# Cenários de Teste
<!--ts-->
  * Verificar se está na página principal;
  * Enviar uma mensagem;
<!--te-->
  Teste de falha:
<!--ts-->
  * Reserva do quarto;
<!--te-->

# Comandos Principais (cy)
<!--ts-->
  * .get(): selecionar um determinado elemento da interface;
  * .type(): escrever em um determinado elemento da interface. Por exemplo, preencher um campo de email;
  * .should(): criar uma asserção;
  * .click(): clicar em um determinado elemento da interface. Por exemplo, um botão Entrar.
<!--te-->

# Gerar o Relatório
./node_modules/.bin/cypress run --spec ./cypress/integration/sua_pasta/sua_spec.spec.js --reporter mochawesome
