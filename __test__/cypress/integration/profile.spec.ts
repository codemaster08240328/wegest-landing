import { describe, cy, it } from '../local'

describe('Profile page works fine', () => {
  it('Renders contents and accepts input', () => {
    cy.visit('/profile')

    cy.get('.MuiContainer-root').find('h1').should('be.visible')
    cy.get('.MuiTypography-root').first().should('have.text', 'Profile')
    cy.get('.MuiContainer-root')
      .find('h1')
      .siblings()
      .eq(0)
      .should('have.prop', 'tagName')
      .should('eq', 'P')
    cy.get('input[name="firstName"]').type('Daniel')
    cy.get('input[name="lastName"]').type('Jackson')
    cy.get('input[name="email"]').type('daniel@sgc.gov')
    cy.get('input[name="phone"]').type('023456789')

    cy.contains('SAVE').click()
    cy.url().should('not.include', '/profile')
    cy.url().should('include', '/')
  })
})
