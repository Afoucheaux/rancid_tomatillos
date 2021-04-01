
describe('Error message', () => {

  it('Should have an error message if data is not returned from the API', () => {
    const errorMessage = 'Oops! We are broke! Please refer to the contact below and hire us..get it..we are broke';
    cy.intercept(
      {
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
      },{
        statusCode: 500,
        message: errorMessage
      }
    )
    cy.visit('http://localhost:3000')
    .wait(1000)
    .get('h1').contains(errorMessage)
  })

});

describe('Rancid Tomatillos', () => {

  it('Should load movie cards from the api data base', () => {
    cy.seedAndVisitHappy()
    cy.get('[data-cy=page-load-message]').contains('Loading...')
    cy.get('[data-cy=title]').contains('ROTTON TOMATILLOS')
    cy.get('img').should('be.visible').should('have.length', 2)
    cy.get('img').should('be.visible')
    cy.contains('Money Plane')
    cy.contains('Rating | 6.1')
    cy.contains('Released | 2020-09-29')
  });

  it('Should be able to click a link and see the movie snap shot', () => {
    cy.seedAndVisitHappy()
    cy.get('img').first().click()
    cy.get('iframe').should('have.attr', 'src').should('include','https://www.youtube.com/embed/aETz_dRDEys')
    .get('[data-cy=overview]').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    .get('[data-cy=genre]').contains("Action")
    .get('[data-cy=runtime]').contains(82)
    cy.get('img').should('be.visible')
    cy.contains('Money Plane')
    cy.contains('Rating | 6.1')
    cy.contains('Released | 2020-09-29')

  });

  it('Should return to home page when home link is clicked', () => {
    cy.seedAndVisitHappy()
    cy.get('img').first().click()
    cy.get('[data-cy=home-button]').click()
    cy.contains('Money Plane')
    cy.contains('Rating | 6.1')
    cy.contains('Released | 2020-09-29')
    cy.get('[data-cy=home-button]').should("not.be.visible")
  })

  it("Should click a movie with incomplete data and see a movie snap shot", () => {
   cy.seedAndVisitSad()
   cy.get('img').eq(1).click()
   cy.get('iframe').should('have.attr', 'src').should('include','https://www.youtube.com/embed/000000')
   .get('[data-cy=runtime]').contains("unavailable")
   cy.contains('Maratón After')
   cy.contains('Rating | 4.3')
   cy.contains('Released | 2020-09-03')
  })

});
