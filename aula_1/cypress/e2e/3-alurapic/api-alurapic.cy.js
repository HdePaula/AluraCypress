describe('API alurapic', () => {
    it('Dados da API', () => {
        cy.request({
            method:'POST',
            url:'https://alurapic-api.onrender.com/user/login',
            //define o corpo e busca o arquivo .env
            body: Cypress.env()
        }).then((res) => {
            //res sera o obj retornado pela solicitacao
            //verifica o status da resposta
            expect(res.status).to.be.equal(200)
            //verifica se a API retornou alguma coisa (o corpo nao esta vazio)
            expect(res.body).is.not.empty
            //verifica se o corpo da resposta possui uma propriedade chamada 'id'
            expect(res.body).to.have.property('id')
            //verifica se a propriedade id e igual a 173
            expect(res.body.id).to.be.equal(173)
        })
    })

    it('Fotos do usuario', () => {
        //Gerando um valor aleatorio para tempo de espera
        const tempoEsperado = Math.random() * 500

        cy.request({
            method:'GET',
            url:'https://alurapic-api.onrender.com/henrique1/photos?page=1',
        }).then((res) => {
            //res sera o obj retornado pela solicitacao
            //verifica o status da resposta
            expect(res.status).to.be.equal(200)
            //verifica se a API retornou alguma coisa (o corpo nao esta vazio)
            expect(res.body).is.not.empty
            //verifica se o corpo da resposta possui uma propriedade description
            expect(res.body[0]).to.have.property('description')
            //verifica se a propriedade descriptio corresponde
            expect(res.body[0].description).to.be.equal('ola esta e a descricao')
            
            //verifica se o tempo foi menor ou igual
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})