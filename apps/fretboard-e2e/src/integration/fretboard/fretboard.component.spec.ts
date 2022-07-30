describe('fretboard', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=fretboardcomponent--primary&args=fretboard;')
  );
  it('should render the component', () => {
    cy.get('ng-guitar-fretboard').should('exist');
  });
});
