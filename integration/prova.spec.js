describe('Cenário de Teste: Funcionalidades do Shady Meadows', ()=>{
    //Casos de Testes Positivos
    it('Caso de Teste: entrar na página inicial do Shady Meadows com sucesso', () => {
        cy.visit("https://automationintesting.online/")
        cy.get('.col-sm-10 > p').should("contain.text", "Welcome to Shady Meadows")
    })

    it('Caso de Teste: enviar uma mensagem com sucesso', () => {
        cy.visit("https://automationintesting.online/")
        let userInfo = createUser()
        cy.get('[data-testid="ContactName"]').type(userInfo[0])
        cy.get('[data-testid="ContactEmail"]').type(userInfo[1])
        cy.get('[data-testid="ContactPhone"]').type(userInfo[2])
        cy.get('[data-testid="ContactSubject"]').type(userInfo[3])
        cy.get('[data-testid="ContactDescription"]').type(userInfo[4])
        cy.get('#submitContact').click()
        cy.get(':nth-child(2) > div > h2').should("contain.text", "Thanks for getting in touch")
    })

    //Caso de Teste Negativo
    it('Caso de Teste: não conseguir reservar um quarto por não selecionar as datas de reserva', () => {
        cy.visit("https://automationintesting.online/")
        cy.get('.col-sm-7 > .btn').click()
        cy.get('.room-booking-form > .form-control').type("Teste de Qualidade")
        cy.get('.col-sm-4 > :nth-child(2) > .form-control').type("Prova de Qualidade")
        cy.get('.col-sm-4 > :nth-child(3) > .form-control').type("teste@teste.com")
        cy.get('.col-sm-4 > :nth-child(4) > .form-control').type("000123456789")
        cy.get('.col-sm-4 > .btn-outline-primary').click()
        cy.get('.alert > :nth-child(1)').should("contain.text", "não deve ser nulo")
        cy.get('.alert > :nth-child(2)').should("contain.text", "não deve ser nulo")
    })

})

function createUser() {
   let name = 'Teste de Qualidade Prova'
   let email = 'testS206@teste.com.br'
   let phone = '000123456789'
   let assunto = 'Criando um caso de teste de sucesso'
   let mensagem = 'Enviando uma mensagem de teste'
    
   let user_info = [name, email, phone, assunto, mensagem]
    
   return user_info;
}