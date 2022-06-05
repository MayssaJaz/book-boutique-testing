describe('Testing home page', () => {
  it('should check there are 5 books', () => {
    cy.visit('/');
    cy.get('tbody').find('tr').should('have.length', 5);
  });
  it('should delete third book', () => {
    cy.visit('/');
    const initialLength = cy.get('tbody >tr').its('length');
    cy.log('heeeeeeeeeeeeeeere', initialLength);
    cy.get(
      ':nth-child(3) > :nth-child(6) > a > .ng-fa-icon > .svg-inline--fa > path'
    ).click();
  });

});
