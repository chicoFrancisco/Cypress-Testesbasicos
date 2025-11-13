/// <reference types = "cypress"/>

//LOCALIZANDO TEXTO DENTRO DE UM SITE HTML
describe('Work whith basic elements',()=>{
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Text',()=>{
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })
    //UTILIZANDO LINKS DENTRO DAS PAGINAS
    it('links',()=>{
        cy.contains('Voltar').click()
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    //MANIPULANDO CAMPOS DE TEXTO 
    it('TextFilds',()=>{
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value','Cypress Test')
        
        cy.get('#elementosForm\\:sugestoes')
        .type('Area de texto')
        .should('have.value','Area de texto')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('????')

        cy.get('[data-cy="dataSobrenome"]')
        .type('Test12345{backspace}{backspace}')
        .should('have.value','Test123')

        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto',{delay:100})
        .should('have.value','acerto')
    })
    //MANIPULANDO RADIO BUTTON
    it('RadioButton', ()=>{
        cy.get('#formSexoFem').click()
        .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')
        
        cy.get("[name='formSexo']").should('have.length', 2)
    })
    //MANIPULANDO CHECKBOX
    it('Checkbox',()=>{
        cy.get('#formComidaPizza').click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple:true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })
    //MANIPULANDO COMBOBOX DE OPÇÕES
    it('Combo',()=>{
        cy.get('[data-test="dataEscolaridade"]')
        .select('2o grau completo')
        .should('have.value','2graucomp')

        cy.get('[data-test="dataEscolaridade"]')
        .select('1graucomp')
        .should('have.value','1graucomp')

        cy.get('[data-test=dataEscolaridade] option').should('have.length',8)
        cy.get('[data-test=dataEscolaridade] option').then($arr =>{
            const values = []
            $arr.each(function(){
               values.push(this.innerHTML) 
        })
        expect(values).to.include.members(["Superior","Mestrado"])
    })
        
        //TODO VALIDAR AS OPÇÕES DO COMBO    
    })
    //MANIPULAR COMBO MULTIPLO 
    it.only('Combo multiplo',()=>{
        cy.get('[data-testid="dataEsportes"]').select(['natacao','Corrida','nada'])
        cy.get('[data-testid="dataEsportes"]').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao','Corrida','nada'])
            expect($el.val()).to.have.length(3)
        })
        cy.get('[data-testid="dataEsportes"]').invoke('val').should('eql',['natacao','Corrida','nada'])
        //TODO VALIDAR OPÇÕES DO COMPO MULTIPLO
    })
})

