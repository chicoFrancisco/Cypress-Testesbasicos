/// <reference types = "cypress"/>
//METODO UTILIZADO PARA VERIFICAR A ESPERA DO SITE NO CYPRESS

describe('Esperas...',()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Aguardando elemento estar disponivel',()=>{
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('not.exist')
    cy.get('#novoCampo').should('exist')
    cy.get('#novoCampo').type('Funciona') 
    })

    it.only('Deve fazer retrys',()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
                    .should('exist')
                    .type('funciona')
        })
     
 
})