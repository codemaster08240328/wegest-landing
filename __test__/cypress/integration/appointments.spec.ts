import { describe, beforeEach, cy, it } from '../local'
import { getFormattedDate } from '@/lib/helpers'

describe('Targets page works fine', () => {
  beforeEach(() => {
    cy.visit('/appointments')
  })

  it('Renders contents', () => {
    cy.get('.MuiContainer-root').find('.calendar').should('be.visible')
    cy.get('.MuiContainer-root')
      .find('.calendar')
      .find('h4')
      .should('be.visible')
    cy.get('.MuiContainer-root')
      .find('.calendar')
      .find('h4')
      .should('have.text', getFormattedDate())
    cy.get('.MuiContainer-root')
      .find('.calendar')
      .find('.day')
      .children()
      .should('have.length', 30)
    cy.get('.MuiContainer-root')
      .find('.calendar')
      .find('.day')
      .children()
      .eq(1)
      .click()

    const today = new Date()
    const tomorrow = new Date(today.setDate(today.getDate() + 1))

    cy.get('.MuiContainer-root')
      .find('.calendar')
      .find('h4')
      .should('have.text', getFormattedDate(tomorrow))
  })
})
