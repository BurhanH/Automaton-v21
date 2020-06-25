describe('Google test', () => {

  beforeEach(() => {
    cy.viewport(1024, 768);
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
});
