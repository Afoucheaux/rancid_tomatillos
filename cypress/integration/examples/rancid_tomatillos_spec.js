
describe('Feedback Loop', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });
});

describe('Rancid Tomatillos', () => {
  beforeEach(() => {
     cy.visit('http://localhost:3000');
   });

  it('Should have a loading screen', () => {
    cy.contains('Loading...')
  });

  it('Should be able to visit the page and render the correct elements', () => {
      cy.contains('ROTTON TOMATILLOS')
      .get('img').should('be.visible')
      cy.contains('Money Plane')
      cy.contains('Rating | 6.1')
      cy.contains('Released | 2020-09-29')
      // can we chain or refactor this.
      // whats up with the link.
  });

  it('Should load all movies from the api data base', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    {
      statusCode: 201,
        body: {
          movies: [{"id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.142857142857143,"release_date":"2020-09-29"}]
        }
    })
    .get('img').should('be.visible')
    cy.contains('Money Plane')
    cy.contains('Rating | 6.1')
    cy.contains('Released | 2020-09-29')
  })

  it('Should have an error message if unable to retrieve data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    },
    {
      statusCode: 401,
        body: {
          message: `Oops! We are broke! Please refer to the contact below and hire us..get it..we are broke`
        }
    })
    // .get('[data-cy=load-error]')
    // .get(".load-error").should('contain', 'Oops! We are broke! Please refer to the contact below and hire us..get it..we are broke')
  })

});
