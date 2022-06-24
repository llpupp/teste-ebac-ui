describe('empty spec', () => {
  it('passes', () => {
    cy.visit('minha-conta')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

  })
})