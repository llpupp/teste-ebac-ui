/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flavio', 'Cavalcante', 'Embraer', 'Brasil', 'Av Brasil', '3100', 'Sorocaba', 'São Paulo', '18098220', '015-3428.2022', 'flavio.cavalcante@embraer.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});