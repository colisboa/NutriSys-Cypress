/// <reference types="Cypress" />

describe('NutriSys - Univesp', () => {

  beforeEach(() => {
    cy.visit('https://willian-eliseu.github.io/nutrisys/index.html');
  });

  it('Tela Inicial', () => {
      //Esperar 500ms
      cy.wait(500)
      //verifica se o logo existe e se está visível
      cy.xpath("//img[@src='assets/img/logo.png']").should('be.exist', 'be.visible')
      //verifica o e-mail de contato existe e está visível
      cy.contains('contato@nutrisys.com.br').should('be.visible')

      //Clicar no botão Sobre
      cy.xpath("//a[contains(.,'SOBRE')]").click()
      //Esperar 1s
      cy.wait(1000)
      //Verificar se alterou a URL
      cy.url().should('be.equal', 'https://willian-eliseu.github.io/nutrisys/sobre.html')
      
      //Clicar no botão Funcionalidades
      cy.xpath("//a[contains(.,'FUNCIONALIDADES')]").click()
      //Esperar 1s
      cy.wait(1000)
      //Verificar se alterou a URL
      cy.url().should('be.equal', 'https://willian-eliseu.github.io/nutrisys/funcionalidades.html')

      //Clicar no botão Blog
      cy.xpath("//a[@href='blog.html']").click()
      //Esperar 1s
      cy.wait(1000)
      //Verificar se alterou a URL
      cy.url().should('be.equal', 'https://willian-eliseu.github.io/nutrisys/blog.html')

      //Clicar no botão Contato
      cy.xpath("//a[@href='contato.html']").click()
      //Esperar 1s
      cy.wait(1000)
      //Verificar se alterou a URL
      cy.url().should('be.equal', 'https://willian-eliseu.github.io/nutrisys/contato.html')

      //Indo pra tela de login e logando no sistema, utilizando a função de login criada em commands.js
      cy.login()
  })


   /* ---------------------------------------------------------------------------------------------- */
   //Gerando um número inteiro aleatório entre dois valores
   function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }
    
})