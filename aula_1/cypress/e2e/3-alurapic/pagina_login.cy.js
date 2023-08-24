describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Verifica mensagens de campos nao preenchidos', () => {
        //verifica as msg
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Login incorreto', () => {
        //duble para testar a API
        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
            statusCode: 400
        }).as('stubPost')
        //o duble forca o erro 400 mesmo se os campos estiverem certos
        cy.login('henrique1', '12345678');
        //wait para esperar a resposta do stubPost
        cy.wait('@stubPost')
    })

    it('Login correto', () => {
        //verifica as msg
        //usa o cypress.env para nao precisar subir no git seu usuario e senha
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        //verifica se o login foi efetuado procurando o campo logout
        cy.contains('a', '(Logout)').should('be.visible');
    })

})