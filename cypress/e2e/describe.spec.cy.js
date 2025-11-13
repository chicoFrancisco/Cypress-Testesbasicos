/// <reference types = "cypress"/>

it('A EXTERNAL TESTE...', ()=> {

})

describe('Should group testes....',()=>{
  describe('Should group more specific tests...',()=>{
    it('a specific test...',()=>{

    })
  })
  describe ('Should group more specifc testes 2...',()=>{
    it('A Specific test 2...', ()=> {

    })
  })
  it('A INTERNAL TESTE...', ()=> {

  })
})

/*METODOS UTILIZADOS PARA DESCRIÇÃO DE GRUPOS DE TESTES, PODENDO SER UTILIZADO O .SKIP PARA PULAR UM TESTE
E O .ONLY PARA TESTAR APENAS AQUELE SCRIP*/