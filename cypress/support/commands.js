import 'cypress-file-upload';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let local_Storage_Memory = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    local_Storage_Memory[key] = localStorage[key];
  });
  cy.writeFile("cypress/fixtures/localStorage.json", local_Storage_Memory);
});

Cypress.Commands.add("restoreLocalStorage", () => {
  cy.readFile("cypress/fixtures/localStorage.json").then((data) => {
    // cy.log("jsondata:",JSON.stringify(data));
    // cy.log("local storage data: " + JSON.stringify(local_Storage_Memory));
    // Object.keys(data).forEach((key) => {
    //   local_Storage_Memory[key]=data[key];
    // });
    Object.keys(data).forEach((key) => {
      localStorage.setItem(key, data[key]);
    });
  });
  //   cy.log("local storage json: " + JSON.stringify(local_Storage_Memory));
});

Cypress.Commands.add("login", () => {
  cy.visit("https://qa.appsteer.io/#/login");
  cy.url().should("include", "https://qa.appsteer.io/");
  cy.get('input[placeholder="Username"]').type("UserTest123@qa.appsteer.io");
  cy.get('input[placeholder="Password"]').type("Admin@123");
  cy.get('[class="p-button-label"]').should("have.text", "LOGIN").click();
  cy.url().should("include", "https://qa.appsteer.io/user/#/u/menuforms/11542");
});
