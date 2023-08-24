import Cadastro from '../../support/pages/cadastro/paina-cadastro'

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home/signup');
    })

    it('Verifica mensagens de campos nao preenchidos', () => {
        //clica para aparecer a msg de erro por nao preencher o email 
        cy.contains('button', 'Register').click();
        //clica novamente para aparecer as outras msg de erro
        cy.contains('button', 'Register').click();
        //Verifica msg de erro
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })
    
    it('Verifica mensagem de email invalido', () => {
        //escreve um email errado
        cy.get('input[formcontrolname="email"]').type('Henrique');
        //Clique no registro para tirar foco do campo
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verifica "full name" < 2 caracteres', () => {
        /*é uma boa prática usar o atributo data-test do elemento a ser testado, desta maneira caso o dev
        precise mudar o name do um elemento, o script de testes nao é quebrado*/
        cy.contains('button', 'Register').click();
        //Escreve um full name muito curto (<2 caracteres)
        cy.get('[data-test="fullName"]').type('H');
        cy.get('[data-test="btnRegister"]').click();
        cy.contains('Mininum length is 2').should('be.visible');
    })

    it('Verifica "full name" > 40 caracteres', () => {
        cy.contains('button', 'Register').click();
        //Escreve um full name muito curto (<2 caracteres)
        cy.get('input[formcontrolname="fullName"]').type('Fullnamemaiorquequarentacaracteresnaopode');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

    it('Verifica "user name" < 2 caracteres>', () => {
        cy.contains('button', 'Register').click();
        //Escreve um full name muito curto (<2 caracteres)
        cy.get('input[formcontrolname="userName"]').type('H');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('Verifica "user name" > 30 caracteres>', () => {
        cy.contains('button', 'Register').click();
        //Escreve um full name muito curto (<2 caracteres)
        cy.get('input[formcontrolname="userName"]').type('usernamemaiorquetrintacaractere');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('Verifica "password" < 8 caracteres', () => {
        cy.contains('button', 'Register').click();
        //Escreve um full name muito curto (<8 caracteres)
        cy.get('input[formcontrolname="password"]').type('1234567');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verifica "password" < 8 caracteres', () => {
        cy.contains('button', 'Register').click();
        //Escreve um full name muito curto (<8 caracteres)
        cy.get('input[formcontrolname="password"]').type('1234567');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    /*
    it('Cria usuario valido', () => {
        cy.get('[data-test="btnRegister"]').click();
        //preenche os campos com dados validos
        cy.get('input[formcontrolname="email"]').type('Henrique@teste.com');
        cy.get('input[formcontrolname="fullName"]').type('Henrique');
        cy.get('input[formcontrolname="userName"]').type('henrique1');
        cy.get('input[formcontrolname="password"]').type('12345678');
        cy.get('[data-test="btnRegister"]').click();
        //para "saber" se o usuario foi criado o cypress verifica a requisição HTTP feita 
        //após a tentativa de registro retorna um status de resposta bem-sucedido (código 200).
    })
    */
    
    it('Cria usuario valido', () => {
      Cadastro.acessarPaginaCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro();  
    })
    
})