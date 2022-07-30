describe('tab-scroller', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=fretcomponent--primary&args=notes;')
  );
  it('should render the component', () => {
    cy.get('ng-guitar-fret').should('exist');
  });
});
