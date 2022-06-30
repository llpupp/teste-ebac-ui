/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Jose', 'Dalecio', 'Google', 'Brasil', 'Av Portugal', '100', 'Sorocaba', 'São Paulo', '18598-220', '015-3428.1000', 'jose.dalecio@google.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de Dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].país,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email

        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
    it('Deve fazer cadastro de endereço de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Flávio', 'Araújo', 'Google', 'Brasil', 'Av.Brasil', '3100', 'São José do Rio Preto', 'São Paulo', '19450000')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
    it('Deve fazer cadastro de endereço de entrega com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].país,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

});