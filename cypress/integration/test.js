describe('Google test', () => {

  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  it('Visits Google Search', () => {
    cy.visit('https://google.com');
    
  });

  it('Try to search', () => {
    cy.get('input[name="q"]')
      .type('Cypress automation framework')

    cy.contains('Google Search')
      .click();

    cy.contains('End to End Testing Framework');
  });

});

describe('API tests', () => {
  it('Get 200 OK success status from API service', () => {
    cy.request(
      'GET',
      'https://api-flask-baur.herokuapp.com/api/v1/quotes',
      )
      .then((response) => {
        expect(response.status).to.eq(200)
      });
    });
  it('Get first quote from API service', () => {
      cy.request(
        'GET',
        'https://api-flask-baur.herokuapp.com/api/v1/quotes/1',
        )
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('quote_id', 1)
          expect(response.body).to.have.property('author', 'Dr. Seuss')
          expect(response.body).to.have.property('quote', 'Don\'t cry because it\'s over, smile because it happened.')
        });
      });  
});
