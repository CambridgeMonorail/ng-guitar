describe('tab-scroller', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=tabscrollercomponent--primary&args=running;tick;bpm;beat;tuning;'
    )
  );
  it('should render the component', () => {
    cy.get('ng-guitar-tab-scroller').should('exist');
  });
});
