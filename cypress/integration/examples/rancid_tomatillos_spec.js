
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
    .get('h1').contains('Oops! We are broke! Please refer to the contact below and hire us..get it..we are broke')
  })

});

describe('Rancid Tomatillos', () => {

  beforeEach(() => {
    const testMovieData = {
      movies: [{"id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.142857142857143,"release_date":"2020-09-29"}]
      }

    const singleMovieData = {
      movie: {"id":694919,"title":"Money Plane","poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","release_date":"2020-09-29","overview":"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.","genres":["Action"],"budget":0,"revenue":0,"runtime":82,"tagline":"","average_rating":6.142857142857143}
    }

    const trailer = {
      videos: [{"id":330, "movie_id":694919, "key":"aETz_dRDEys", "site":"YouTube", "type":"Trailer"}]
    }
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', trailer)
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovieData)
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', testMovieData)
    cy.visit('http://localhost:3000')
  });

  it('Should load movie cards from the api data base', () => {
    cy.get('[data-cy=page-load-message]').contains('Loading...')
    cy.get('[data-cy=title]').contains('ROTTON TOMATILLOS')
    cy.get('img').should('be.visible')
    cy.contains('Money Plane')
    cy.contains('Rating | 6.1')
    cy.contains('Released | 2020-09-29')
  });

  it('Should be able to click a link and see the movie snap shot', () => {
    cy.get('img').click()
    cy.get('iframe').should('have.attr', 'src').should('include','https://www.youtube.com/embed/aETz_dRDEys')
    .get('[data-cy=overview]').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    .get('[data-cy=genre]').contains("Action")
    .get('[data-cy=runtime]').contains(82)
    cy.get('img').should('be.visible')
    cy.contains('Money Plane')
    cy.contains('Rating | 6.1')
    cy.contains('Released | 2020-09-29')
  })

  it('Should return to home page when home link is clicked', () => {
    cy.get('img').click()
    cy.get('[data-cy=home-button]').click()
    cy.contains('Money Plane')
    cy.contains('Rating | 6.1')
    cy.contains('Released | 2020-09-29')
  })

});
