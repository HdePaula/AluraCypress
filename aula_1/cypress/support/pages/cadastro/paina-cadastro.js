import { ELEMENTS } from './elements';

//importando os dados do ELEMENTS do arquivo elements.js
const el = require('./elements').ELEMENTS

//obj Cadastro
class Cadastro {
    acessarPaginaCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home/signup');
        cy.contains('button', 'Register').click();
    }

    preencherFormulario(){
        cy.get(ELEMENTS.email).type('Henrique@teste.com');
        cy.get(ELEMENTS.fullName).type('Henrique');
        cy.get(ELEMENTS.userName).type('henrique1');
        cy.get(ELEMENTS.passwor).type('12345678');
    }

    submeterCadastro(){
        cy.get(ELEMENTS.btnRegister).click();
    }
}

//exportando classe
export default new Cadastro;