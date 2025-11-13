/// <reference types = "cypress"/>

//LOCALIZANDO TEXTO DENTRO DE UM SITE HTML
describe('Work whith basic elements',()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

      
    })
    it('teste de locators usando jquery...',()=>{
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')

    })
})
