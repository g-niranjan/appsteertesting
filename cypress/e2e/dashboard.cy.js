/// <reference types="cypress"/>

describe("Dashboard page testing in appester portal", () => {
  // beforeEach(() => {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiOWFlNDNjNDgtNTA3My00ZTJlLTk4YTctYjVmOTBhNDJiODRhIiwic3ViIjoibmlyYW5qYW4uZ0Bpc3RlZXIuY29tIiwicm9sZSI6IlVzZXIiLCJpc3MiOiJBcHBTdGVlciIsImZ1bGxOYW1lIjoiR3V0aGEgTmlyYW5qYW4iLCJvcmdEb21haW5OYW1lIjoiaXN0ZWVyLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6Im5pcmFuamFuLmdAaXN0ZWVyLmNvbSIsInV1aWQiOiI4MDJjYjUzZi01YzExLTRjNjgtYmU0Yi1hZGQwZGE3Mzg2MDYiLCJyb2xlVVVJRCI6IjRhYzczZDgxLTQyNGItMTFlZS1iMmNhLTAwMjI0ODRiZGNkMiIsImRldmljZWlkIjpudWxsLCJ1aWQiOiI0YTgyMDIzOS1lMWM5LTRjZmEtYjc4Ni01ZGIxZjQ2MWUwYjMiLCJ4LWZvcndhcmRlZC1ob3N0IjoiY2xvdWQuYXBwc3RlZXIuaW8iLCJ0ZW5hbnRJZCI6MjM5LCJleHAiOjE3NDc4NDUyMjcsImlhdCI6MTc0NzgyNzIyN30.bC0tFbsI3RGa0l39_hnt0rwG14wJTH0pGDUaiDgUfu0";

  //   cy.visit(
  //     "https://cloud.appsteer.io/user/#/u/dashboard/295/2203311337054500",
  //     {
  //       onBeforeLoad(win) {
  //         win.localStorage.setItem("auth_token", token); // Adjust key name as per your app
  //       },
  //     }
  //   );
  // });
  //! COMENTED OUT FOR NOW , LOCAL STORAGE DATA WE READ FROM FILE, INSTEAD OF LOGGING IN
  // before(() => {
  //   cy.login();
  //   cy.log("application launched");
  //   cy.saveLocalStorage();
  // });

  //   // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiOTg3MDQzOTQtOWExZi00NjMzLWI4YzYtODFkZTNlYjQ4YmJiIiwic3ViIjoiVXNlclRlc3QxMjNAcWEuYXBwc3RlZXIuaW8iLCJyb2xlIjoiVGVzdFByaXZpbGVnZXMiLCJpc3MiOiJBcHBTdGVlciIsImZ1bGxOYW1lIjoiVXNlclRlc3QxMjMiLCJvcmdEb21haW5OYW1lIjoicWEuYXBwc3RlZXIuaW8iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJVc2VyVGVzdDEyM0BxYS5hcHBzdGVlci5pbyIsInV1aWQiOiI3NTk0ZTRkZi02YjMyLTRlZDYtYWMwMy1iOTQ4NWUwMDg5MTgiLCJyb2xlVVVJRCI6IjZkNTYyYWVmLTk1MTYtNGJjMC04ZDE0LTAwNTk5ODJlYmMyNSIsImRldmljZWlkIjpudWxsLCJ1aWQiOiJiNDdkZjk3MS1jN2ZmLTQzNTEtYThjOC0wYmM0MmFhZjJlYTIiLCJ4LWZvcndhcmRlZC1ob3N0IjoicWEuYXBwc3RlZXIuaW8iLCJ0ZW5hbnRJZCI6NDEwLCJleHAiOjE3NDgzNDg3NDYsImlhdCI6MTc0ODMzNzk0Nn0.nO-KNdQc2AzGAIoCD4pP4yKqpckNVt_jGinRzTpYsM0'
  //   // cy.visit(
  //   //     "https://qa.appsteer.io/user/#/u/menuforms/11542",
  //   //     {
  //   //       onBeforeLoad(win) {
  //   //         win.localStorage.setItem("tokenId", token); // Adjust key name as per your app
  //   //       },
  //   //     }
  //   //   );
  //   // });
  //   // after(() => {
  //   //   cy.clearLocalStorage();
  //   //   cy.log("All local storage cleared");

  // after(() => {
  //   cy.clearLocalStorage();
  //   cy.log("All local storage cleared");
  // });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  // it("Dashboard page testing", () => {
  //   //cy.visit('https://cloud.appsteer.io/user/#/u/dashboard/295/2203311337054500')
  //   // cy.get('.flex-m height-100 ng-star-inserted').should('have.text','Hello, Gutha Niranjan');
  //   // cy.get('.ng-star-inserted').should('have.text','Dashboard');
  //   // cy.get('.ng-star-inserted').should('be.visible');
  //   // cy.get('.ng-star-inserted').should('have.css','font-size','16px');
  //   // cy.get('.ng-star-inserted').should('have.css','color','rgb(0, 0, 0)');
  //   // cy.restoreLocalStorage().then((data) => {
  //   //   cy.log("token is " + data["tokenId"]);
  //   //   return localStorage.getItem("tokenId");
  //   // });

  //   //cy.log("local storage token is " + localStorage.getItem("tokenId"));

  //   cy.window().then((win) => {
  //     console.log(
  //       "Token from localStorage:",
  //       win.localStorage.getItem("tokenId")
  //     );
  //   });

  //   cy.visit("https://qa.appsteer.io/user/#/u/menuforms/11542");

  //   cy.get("[class='breadcrumb']").should("have.text", "Rk");

  //   // cy.get('[class="p-toolbar-group-left"]')
  //   //   .should("have.attr","src", "https://s3.ap-south-1.amazonaws.com/appsteer.io/qa/karthik/98704394-9a1f-4633-b8c6-81de3eb48bbb/Web/c0194c5c-6033-4f16-84c7-83847fcb6cc4.");

  //   cy.get('[class="p-menuitem-text ng-star-inserted"]').then((data)=>{
  //     cy.log("menus list is", data.text());
  //   })
  //   cy.get([
  //     '[class="pi font-icon icon-g-email p-button-icon ng-star-inserted"]',
  //   ]);
  //   //.should("have.css", "backface-visibility", "hidden");
  //   // cy.url().should('include', 'https://qa.appsteer.io/user/gmail.com');
  // });

  it("verify menu is visible", () => {
    // cy.get('div .p-menu p-component expanded').should('be.hidden');
    // cy.log("local storage token is " + localStorage.getItem("tokenId"));
    cy.visit("https://qa.appsteer.io/user/#/u/menuforms/11542");
    cy.get('[class="p-avatar-text ng-star-inserted"]')
      .should("contain.text", "U")
      .click();
    cy.get('[class="p-menu p-component"] >ul >li').should("have.length", 2);
    cy.get('[class="p-menu p-component"] >ul >li > a ').then((items) => {
      expect(items[0]).to.contain.text(" UserTest123 - (testprivileges) ");
      expect(items[1]).to.contain.text(" Logout ");
    });

    // cy.get('[class="p-menu p-component"] >ul >li > a ').then((items)=>{
    //   expect(items[0]).to.contain.text(' UserTest123 - (testprivileges) ').click();
    //   cy.url().should("include", "https://qa.appsteer.io/user/#/u/profile");
    // });

    // cy.get('[class="p-menu p-component"] >ul >li > a ').should("have.length", 2).eq(0).click();
    // cy.url().should("include", "https://qa.appsteer.io/user/#/");

    // cy.get('[class="label"]')
    //   .should("have.text", "My Profile")
    //     .and("be.visible")
    // cy.get('[class="title"]')
    //   .should("have.text", "UserTest123")
    //     .and("be.visible")
    // cy.get('[class ="p-element p-ripple transcparent-bg p-button p-component ng-star-inserted"]')
    //   .should("have.text","Change Password").and("be.visible");
    // cy.get('[class="p-element p-ripple p-button p-component"]')
    //     .should("have.text", "Edit Profile")
    //         .and("be.disabled");
  });

  it.only("validate profile page", () => {
    cy.visit("https://qa.appsteer.io/user/#/u/menuforms/11542");
    //cy.wait(20000);
    cy.get(".p-avatar-text").click();
    cy.get(
      ":nth-child(1) > .p-menuitem-link > .label-wrapper > .p-menuitem-text"
    ).click();

    // cy.url().should("contain", "https://qa.appsteer.io/#/");
    cy.get('[class="label"]')
      .should("have.text", "My Profile")
      .and("be.visible");
    cy.get('[class="title"]')
      .should("have.text", "UserTest123")
      .and("be.visible");
    cy.get(
      '[class ="p-element p-ripple transcparent-bg p-button p-component ng-star-inserted"]'
    )
      .should("have.text", "Change Password")
      .and("be.visible");
    cy.get('[class="p-element p-ripple p-button p-component"]')
      .should("have.text", "Update")
      .and("be.disabled");

        //cy.get('.p-button-danger > .p-button-icon').should('not.be.visible');


      cy.get('button.p-element.p-ripple.p-button-outlined.p-button.p-component')
            .should('be.visible')
            .click();

        cy.get('input[type="file"]', { timeout: 10000 }).attachFile('card.jpg');

        cy.get('.p-button-raised > .p-button-label', { timeout: 10000 })
            .should('be.visible')
            .and('have.text', 'Submit')
            .click();

        cy.get('.p-button-danger > .p-button-icon').should('be.visible');
        
    // cy.get('.upload-active > .p-ripple > .p-button-icon').selectFile('cypress/fixtures/Card.jpg');
    //  cy.get('.upload-active > .p-ripple > .p-button-icon',{timeout :10000}).attachFile('Card.jpg')

    //  cy.get('.upload-active > .p-ripple',{timeout : 10000}).click();

    //  cy.get('.p-button-raised > .p-button-label').should("have.text", "Submit").click();

    cy.get(':nth-child(1) > .p-field-wrapper > .p-inputtext').invoke('val').then((input) => {
      expect(input).to.equal("UserTest123@qa.appsteer.io");
    });

    cy.get('.signature-upload-wrapper > .p-field-wrapper > .control-wrapper > .p-inputtext-lg').should('be.visible').click();
    cy.get('input[type="file"]', { timeout: 10000 }).attachFile('card.jpg');
    cy.get('.p-button-raised > .p-button-label').should('be.visible').and('have.text', 'Submit').click();

  });

  // it("menu form get api testing", () => {
  //   const token = cy.restoreLocalStorage().then(() => {
  //     return localStorage.getItem("tokenId");
  //   });
  //   cy.log("local storage token is " + token);
  //   cy.request({
  //     method: "GET",
  //     url: "https://qa.appsteer.io/user/#/u/menuforms/11321",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //     cy.log(response.body);
  //   });
  // });
});
