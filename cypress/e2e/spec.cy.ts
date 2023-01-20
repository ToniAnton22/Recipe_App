describe("check pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/LoginPage");
    cy.visit("http://localhost:3000/RegisterPage");
    cy.visit("http://localhost:3000/");
  });
});

export {};
