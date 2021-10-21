import { describe, beforeEach, cy, it } from '../local'

describe('Targets page works fine', () => {
  beforeEach(() => {
    cy.visit('/targets')
  })

  it('Renders contents', () => {
    cy.get('.MuiContainer-root div.MuiCard-root')
      .first()
      .find('h4')
      .should('be.visible')
    cy.get('.MuiContainer-root div.MuiCard-root')
      .first()
      .find('h3')
      .should('be.visible')
    cy.get('.MuiContainer-root div.MuiCard-root')
      .first()
      .find('h6')
      .should('be.visible')
    cy.get('.MuiContainer-root div.MuiCard-root')
      .first()
      .find('p')
      .should('be.visible')
    cy.get('.MuiContainer-root div.MuiCard-root')
      .first()
      .find('span.material-icons.MuiIcon-root')
      .should('be.visible')
  })
})
