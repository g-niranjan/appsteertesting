/// <reference types ="cypress"/>
describe("Login page testing in appester portal", () => {
  beforeEach("Login page testing", () => {
    cy.visit("/");
    cy.url().should("include", "https://qa.appsteer.io/");
  });
    // it('apllication should be launched', () => {
    //     cy.visit("/");
    // });

  it("validate text in login page", () => {
    cy.get('[class="support"]').eq(0).should(
      "have.text",
      "Login using Appsteer Identity"
    );
    cy.get('[class="support"]')
      .should("be.visible")
      .and("have.css", "font-size", "14.08px")
      .and("have.css", "color", "rgba(49, 49, 49, 0.7)");
  });

  it("validate username field should be visible and enabled", () => {
    cy.get('input[placeholder="Username"]')
      .should("be.visible")
      .and("not.be.disabled");
  });
  it("validate username field should enter the value", () => {
    cy.get('input[placeholder="Username"]').type("UserTest123@qa.appsteer.io");
  });

  it("validate password field should be visible and enabled", () => {
    cy.get('input[placeholder="Password"]')
      .should("be.visible")
      .and("not.be.disabled");
    cy.get('input[placeholder="Password"]').should("be.visible");
  });
  it("validate password field should enter the value", () => {
    cy.get('input[placeholder="Password"]').type("Admin@123");
  });

 it.only("login button should be visible and enabled", () => {
    cy.get('[class="p-inputtext p-component p-element input-md ng-untouched ng-pristine ng-invalid"]').type("UserTest123@qa.appsteer.io");
    cy.get('input[placeholder="Password"]').type("Admin@123");
    cy.get('[class="p-button-label"]').should('have.text','LOGIN')  });
    //cy.url().should("contains", "/user/#/u/menuforms");

  //   it("google authentication checking", () => {
  //     cy.visit(
  //       "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=285004993930-b7g7lkmvsfdgs4trat5pabsda2uum84v.apps.googleusercontent.com&response_type=code&scope=openid%20email&redirect_uri=https%3A%2F%2Fcloud.appsteer.io%2Fservices%2Fweb%2Flogin%2Fsecured%2Fredirect%2Fsso&state=a6374ca9-6bc0-468e-a595-9debdc266a44&access_type=offline&approval_prompt=force&service=lso&o2v=1&flowName=GeneralOAuthFlow"
  //     );
  //     cy.get('[class= "gNJDp"]').should("have.text", "to continue to AppSteer");
  //     cy.get('[class="gNJDp"]').should("be.visible");
  //     cy.get('[class="gNJDp"]').should("have.css", "font-size", "16px");
  //     const email = "niranjan.g@isteer.com";
  //     cy.get('[name="identifier"]').type(email);
  //     cy.get('[class="VfPpkd-vQzf8d"]').contains("Next").click();
  //     cy.wait(2000);
  //     cy.url().should("include", "accounts.google.com");
  //     cy.get(".vAV9bf").should("have.text", "Welcome");
  //     cy.get('[class="yAlK0b"]').should("have.text", email);
  //     cy.get('input[aria-label="Enter your password"]').type("Admin@121314");
  //     cy.get('[class="VfPpkd-vQzf8d"]').contains("Next").click();
  //     cy.wait(60000);
  //     cy.url().should("include", "accounts.google.com");
  //     cy.wait(5000);
  //     cy.get('[class="VfPpkd-vQzf8d"]').contains("Continue").click();
  //     cy.wait(20000);
  //     //cy.get('input [type="password"]').type('Admin@121314')
  //     cy.url().should("include", "https://cloud.appsteer.io/user/#/u/dashboard");
  //     //cy.visit('https://cloud.appsteer.io/user/#/u/dashboard/295/2203311337054500')
  //     //cloud.appsteer.io/user/#/u/dashboard/295/2203311337054500
  //     https: cy.get(".flex-m height-100 ng-star-inserted").should(
  //       "have.text",
  //       "Hello, Gutha Niranjan"
  //     );
  //   });

  it("appsteer dashboard testing", () => {
    cy.visit(
      "https://qa.appsteer.io/user/#/u/menuforms/11542"
    );
    cy.get(".flex-m height-100 ng-star-inserted").should(
      "have.text",
      "Rk"
    );
  });
});
