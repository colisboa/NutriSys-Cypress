/* ---------------------------------------------------------------------------------------------- */
// Função para fazer login no Sistema
Cypress.Commands.add('login', () => {
    cy.visit('https://willian-eliseu.github.io/nutrisys/login.html');
  });