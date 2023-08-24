describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home/signup')
    })

    const usuarios = require('../../fixtures/usuarios.json')

    //percorre a lista de usuarios usando usuario
    usuarios.forEach(usuario => {
        it('Cria usuario valido', () => {
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })  
    })
})