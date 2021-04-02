Cypress.Commands.add("seedAndVisitHappy", () => {
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {fixture:"trailer_happy.js"})
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {fixture:"single_movie_happy.js"})
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture:"movies_happy.js"})
  cy.visit('http://localhost:3000')
})


Cypress.Commands.add("seedAndVisitSad", () => {
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/737173/videos', {fixture:"trailer_sad.js"})
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/737173', {fixture:"single_movie_sad.js"})
  cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture:"movies_happy.js"})
  cy.visit('http://localhost:3000/')
})
