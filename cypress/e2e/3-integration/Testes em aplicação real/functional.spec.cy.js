/// <reference types = "cypress"/>

//LOCALIZANDO TEXTO DENTRO DE UM SITE HTML
describe('Deve testar a nivel funcional',()=>{
    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me')
        cy.get('.input-group > .form-control').type('eduardofranciscochico@outlook.com')
cy.get(':nth-child(2) > .form-control').type('38451207')
cy.get('.btn').click()
cy.get('.toast-message').should('contain','Bem vindo')
    })
    it('Inserir conta',()=>{
        cy.get('.dropdown-toggle').click()
        cy.get('[href="/contas"]').click()
        cy.get('.form-control').type('conta de teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain','Conta inserida com sucesso')
    })
        it.only('Alterar conta',()=>{
        cy.get('.dropdown-toggle').click()
        cy.get('[href="/contas"]').click()
       cy.get('tbody > :nth-child(2) > :nth-child(2) > :nth-child(1) > .far').click()
        cy.get('.form-control').clear()
        .type('outra conta')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain','Conta atualizada')
    })
      })