import { describe, beforeEach, cy, it } from '../local'

describe('home screen works fine', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('bottom navigation works fine', () => {
    cy.get('div.MuiBottomNavigation-root').contains('Plug').click()
    cy.log('Go to /plug')
    console.log(cy.location('pathname'))
    cy.location('pathname').should('include', '/plug')

    cy.get('div.MuiBottomNavigation-root').contains('Appunt.').click()
    cy.log('Go to /appointment')
    cy.location('pathname').should('include', '/appointment')
  })

  it('menu drawer works fine', () => {
    cy.get('div[role="presentation"].MuiDrawer-root').should('not.exist')
    cy.get('span[data-testid="drawer-icon"]').click()
    cy.get('div[role="presentation"].MuiDrawer-root').should('exist')
  })
})
