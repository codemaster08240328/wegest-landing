import { describe, beforeEach, cy, it } from '../local'

describe('Login page works fine', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('User input changes state', () => {
    cy.get('input[name="email"]')
      .type('hello@email.com')
      .should('have.value', 'hello@email.com')

    cy.get('input[name="password"]')
      .type('password123')
      .should('have.value', 'password123')

    cy.get('input[name="remember"]').check().should('be.checked')
  })

  it('Moves to signup page when clicked link', () => {
    cy.contains("Don't have an account? Register").click()
    cy.url().should('include', '/signup')
  })

  it('Login triggers successfully', () => {
    cy.get('input[name="email"]').type('hello@email.com')

    cy.get('input[name="password"]').type('password123')

    cy.get('input[name="remember"]').check()

    cy.contains('LOGIN').click()
    cy.log('logged in')
    cy.url().should('not.include', '/login')
    cy.url().should('include', '/')
  })
})
