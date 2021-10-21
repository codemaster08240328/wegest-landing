import { describe, beforeEach, cy, it } from '../local'

describe('Signup page works fine', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Renders contents', () => {
    cy.get('.MuiContainer-root p:nth-of-type(1)').should('have.text', 'Welcome')
    cy.get('.MuiContainer-root p:nth-of-type(2)').should(
      'have.text',
      'Fill in the fields below to access all the features of the app.'
    )
  })

  it('User input changes state', () => {
    cy.get('input[name="first_name"]')
      .type('Hello')
      .should('have.value', 'Hello')

    cy.get('input[name="last_name"]')
      .type('World')
      .should('have.value', 'World')

    cy.get('input[name="email"]')
      .type('hello@email.com')
      .should('have.value', 'hello@email.com')

    cy.get('input[name="phone"]')
      .type('123456789')
      .should('have.value', '123456789')

    cy.get('input[name="code"]')
      .type('999999999')
      .should('have.value', '999999999')

    cy.get('input[name="password"]')
      .type('password123')
      .should('have.value', 'password123')

    cy.get('input[name="confirm_password"]')
      .type('password123')
      .should('have.value', 'password123')

    cy.get('input[name="gender"]').check('male').should('have.value', 'male')

    cy.get('input[name="gender"]')
      .check('female')
      .should('have.value', 'female')
  })

  it('Register triggers successfully', () => {
    cy.contains('REGISTER').click()
    cy.log('Registered')
    cy.url().should('not.include', '/signup')
    cy.url().should('include', '/home')
  })

  it('Navigator to back works fine', () => {
    cy.visit('/login')
    cy.contains("Don't have an account? Register").click()
    cy.url().should('include', '/signup')

    cy.get('button[aria-label="back to login"]').click()
    cy.log('Go back')
    cy.url().should('not.include', '/signup')
    cy.url().should('include', '/login')
  })
})
