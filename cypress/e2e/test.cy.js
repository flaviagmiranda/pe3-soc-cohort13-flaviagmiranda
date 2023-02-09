describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Search bar workability', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    cy.get('input').clear('T');
    cy.get('input').type('Tech');
    cy.get('button').click();
    cy.get('input').clear();
    cy.get('input').type('Economy');
    cy.get('button').click();
    /* ==== End Cypress Studio ==== */
  });
})