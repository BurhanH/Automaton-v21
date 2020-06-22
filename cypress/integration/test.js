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
