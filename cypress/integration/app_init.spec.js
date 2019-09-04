describe("App initialization", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Loads todos on page load", () => {
    cy.get(".todos")
      .should("exist")
      .and("have.length", 4);
  });
  it("Should be focused on new todo input", () => {
    cy.focused().should("exist");
  });
});
