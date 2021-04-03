describe("Rancid Tomatillos", () => {

  it("Should load movie cards from the api data base", () => {
    cy.seedAndVisitHappy()
    cy.get("[data-cy=page-load-message]").contains("Loading...")
    cy.get("[data-cy=title]").contains("ROTTON TOMATILLOS")
    cy.get("[data-cy=poster]").should("be.visible").should("have.length", 2)
    cy.get("[data-cy=poster]").should("be.visible")
    cy.contains("Money Plane")
    cy.contains("Rating | 6.1")
    cy.contains("Released | 2020-09-29")
  });

  it("Should search movies by title", () => {
    cy.seedAndVisitHappy();
    cy.get('[data-cy=search-bar]').type("money")
    cy.get("[data-cy=poster]").should("have.length", 1)
    cy.contains("Money Plane")
    cy.get('[data-cy=search-bar]').clear()
    cy.get("[data-cy=poster]").should("have.length", 2)
  })

  it("Should show a loading message when grabbing single movie data", () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {fixture:"trailer_happy.js"})
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {fixture:"single_movie_happy.js"})
    cy.visit('http://localhost:3000/694919')
    cy.get("[data-cy=loading-single]").contains("Loading movie....")

  })

  it("Should be able to click a link and see the movie snap shot", () => {
    cy.seedAndVisitHappy()
    cy.get("[data-cy=poster]").first().click()
    cy.get('[data-cy=search-form]').should("not.be.visible")
    cy.get("[data-cy=poster]").should("have.length", 1)
    cy.get(".background-img").should("have.css", "background").should("include","https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
    cy.get("[data-cy=trailer]").should("have.attr", "src").should("include","https://www.youtube.com/embed/aETz_dRDEys")
    .get("[data-cy=overview]").contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    .get("[data-cy=genre]").contains("Action")
    .get("[data-cy=runtime]").contains(82)
    .get("[data-cy=poster]").should("be.visible")
    cy.contains("Money Plane")
    cy.contains("Rating | 6.1")
    cy.contains("Released | 2020-09-29")
  });

  it('Should return to home page when home link is clicked', () => {
    cy.seedAndVisitHappy()
    cy.get("[data-cy=poster]").first().click()
    cy.get("[data-cy=home-button]").click()
    cy.contains("Money Plane")
    cy.contains("Rating | 6.1")
    cy.contains("Released | 2020-09-29")
    cy.get("[data-cy=home-button]").should("not.be.visible")
    cy.get("[data-cy=trailer]").should("not.exist")
  })

  it('Should click a movie with incomplete data and see a movie snap shot', () => {
    cy.seedAndVisitSad()
    cy.get("[data-cy=poster]").eq(1).click()
    cy.get("[data-cy=trailer]").should("have.attr", "src").should("include","https://www.youtube.com/embed/000000")
    .get("[data-cy=runtime]").contains("unavailable")
    cy.contains("Maratón After")
    cy.contains("Rating | 4.3")
    cy.contains("Released | 2020-09-03")
  });

  it("Can go forward an backward and display the correct url", () => {
    cy.seedAndVisitHappy()
    cy.go("forward")
    cy.url().should("eq", "http://localhost:3000/")
    cy.get("[data-cy=poster]").first().click()
    cy.get("[data-cy=home-button]").click()
    cy.go("back")
    cy.url().should("eq", "http://localhost:3000/694919")
  });
   
});

describe("Home page error message", () => {

  it("Should display an error message if data is not returned from the API", () => {
    const errorMessage = "Oops! We are broke! Please refer to the contact below and hire us..get it..we are broke";
    cy.intercept(
      {
        method: "GET",
        url: "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
      },{
        statusCode: 500,
        message: errorMessage
      }
    )
    cy.visit("http://localhost:3000")
    .wait(1000)
    .get("h1").contains(errorMessage)
  })
});

describe("Single movie error message", () => {

  it("Should display an error message for a 500 server status", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919"
      },{
        statusCode: 500,
        message: "Something went wrong"
      }
    )
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture:"movies_happy.js"})
    cy.visit('http://localhost:3000')
    cy.get("[data-cy=poster]").first().click()
    cy.get("[data-cy=single-movie-error]").contains("There was an issue, please refresh and try again")
  })
})

describe("Contact Page", () => {

  it("Should open the contact page when any page and return to home screen", () => {
    cy.seedAndVisitHappy()
    cy.get("[data-cy=contact-button]").click()
    cy.get('[data-cy=search-form]').should("not.be.visible")
    cy.contains("Elizabeth Hahn")
    cy.contains("Aaron Foucheaux")
    cy.contains("Home")
    cy.get("[data-cy=contact-button]").should("not.exist")
    cy.get("[data-cy=home-button]").click()
    cy.get("[data-cy=poster]").first().click()
    cy.get("[data-cy=contact-button]").click()
    cy.contains("Elizabeth Hahn")
    cy.contains("Aaron Foucheaux")
  })

})
