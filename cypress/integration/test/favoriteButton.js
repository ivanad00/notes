/// <reference types= "cypress"/>

describe("Favorite Button funcionality", () => {
  beforeEach("Open page", () => {
    cy.visit("/");
  });
  it("can add new items to favorite", () => {
    const newItem = "Feed the cat";
    cy.get('[placeholder="Enter a note..."]').type(`${newItem}`);
    cy.get(".add-text").should("have.text", newItem);
    cy.get('[data-cy="favoriteButton"]').click();
    cy.get('[data-cy="add-note"]').click();
  });
  it("delete notes button works", () => {
    const newItem = "Note not important";
    cy.get('[placeholder="Enter a note..."]').type(`${newItem}`);
    cy.get(".add-text").should("have.text", newItem);
    cy.get('[data-cy="add-note"]').click();
    cy.get(".remove").click();
  });
});
