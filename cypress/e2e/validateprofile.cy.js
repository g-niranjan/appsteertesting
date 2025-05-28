/// <refence types="cypress" />

describe("Validate profile page in appsteer portal", () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("validate profile page", () => {
    cy.visit("https://qa.appsteer.io/#/u/profile");
    cy.url().should("include", "https://qa.appsteer.io/#/u/profile");
    cy.get('[class="label"]')
      .should("have.text", "My Profile")
        .and("be.visible")
    cy.get('[class="title"]')
      .should("have.text", "UserTest123")
        .and("be.visible")
    cy.get('[class ="p-element p-ripple transcparent-bg p-button p-component ng-star-inserted"]')
      .should("have.text","Change Password").and("be.visible");
    cy.get('[class="p-element p-ripple p-button p-component"]')
        .should("have.text", "Edit Profile")
            .and("be.disabled");
  });
});
