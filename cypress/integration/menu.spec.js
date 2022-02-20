// menu.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('waitqrapp login test', function () {
    it('logs in from waitqrapp.com', function () {
        cy.clearLocalStorage()
        cy.visit('https://waitqrapp.com')
        cy.contains('Iniciar Sesión').click()
        cy.get('#email').type('intento1@intento1.com')
        cy.get('#password').type('intento123')
        cy.get('#root > div > div > form > div:nth-child(3) > input').click()

    })
    it('checks menu flow', function (){
        cy.contains('Restaurante').click()
        cy.contains('La Noria').click()


    })
})