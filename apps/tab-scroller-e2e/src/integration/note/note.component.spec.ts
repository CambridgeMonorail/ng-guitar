describe('tab-scroller', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=notecomponent--primary&args=note;')
  );
  it('should render the component', () => {
    cy.get('ng-guitar-note').should('exist');
  });
});
