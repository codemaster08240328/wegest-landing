import { describe, cy, it } from '../local'

describe('Add Client page works fine', () => {
  it('Renders contents and accepts input', () => {
    cy.visit('/plug/add-client')

    cy.get('.MuiContainer-root').find('h1').should('be.visible')
    cy.get('.MuiTypography-root').first().should('have.text', 'New Client')
    cy.get('.MuiContainer-root')
      .find('h1')
      .siblings()
      .eq(0)
      .should('have.prop', 'tagName')
      .should('eq', 'P')
    cy.get('input[name="firstName"]').type('Jack')
    cy.get('input[name="lastName"]').type("O'Neill")
    cy.get('input[value="male"]').click()
    cy.get('input[name="email"]').type('jack@sgc.gov')
    cy.get('input[name="phone"]').type('1234567891')

    cy.contains('SAVE').click()
    cy.url().should('not.include', '/plug/add-client')
    cy.url().should('include', '/plug')
  })
})
