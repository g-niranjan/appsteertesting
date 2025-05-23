describe("Dashboard page testing in appester portal", () => {
//   beforeEach(() => {
//     const token =
//       "eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiOWFlNDNjNDgtNTA3My00ZTJlLTk4YTctYjVmOTBhNDJiODRhIiwic3ViIjoibmlyYW5qYW4uZ0Bpc3RlZXIuY29tIiwicm9sZSI6IlVzZXIiLCJpc3MiOiJBcHBTdGVlciIsImZ1bGxOYW1lIjoiR3V0aGEgTmlyYW5qYW4iLCJvcmdEb21haW5OYW1lIjoiaXN0ZWVyLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6Im5pcmFuamFuLmdAaXN0ZWVyLmNvbSIsInV1aWQiOiI4MDJjYjUzZi01YzExLTRjNjgtYmU0Yi1hZGQwZGE3Mzg2MDYiLCJyb2xlVVVJRCI6IjRhYzczZDgxLTQyNGItMTFlZS1iMmNhLTAwMjI0ODRiZGNkMiIsImRldmljZWlkIjpudWxsLCJ1aWQiOiI0YTgyMDIzOS1lMWM5LTRjZmEtYjc4Ni01ZGIxZjQ2MWUwYjMiLCJ4LWZvcndhcmRlZC1ob3N0IjoiY2xvdWQuYXBwc3RlZXIuaW8iLCJ0ZW5hbnRJZCI6MjM5LCJleHAiOjE3NDc4NDUyMjcsImlhdCI6MTc0NzgyNzIyN30.bC0tFbsI3RGa0l39_hnt0rwG14wJTH0pGDUaiDgUfu0";

//     cy.visit(
//       "https://cloud.appsteer.io/user/#/u/dashboard/295/2203311337054500",
//       {
//         onBeforeLoad(win) {
//           win.localStorage.setItem("auth_token", token); // Adjust key name as per your app
//         },
//       }
//     );
//   });
  // it('Dashboard page testing',()=>{
  //     //cy.visit('https://cloud.appsteer.io/user/#/u/dashboard/295/2203311337054500')
  //    // cy.get('.flex-m height-100 ng-star-inserted').should('have.text','Hello, Gutha Niranjan');
  //     // cy.get('.ng-star-inserted').should('have.text','Dashboard');
  //     // cy.get('.ng-star-inserted').should('be.visible');
  //     // cy.get('.ng-star-inserted').should('have.css','font-size','16px');
  //     // cy.get('.ng-star-inserted').should('have.css','color','rgb(0, 0, 0)');
  // })

  it("Dashboard page testing", () => {
    const token1 =
      "eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiOWFlNDNjNDgtNTA3My00ZTJlLTk4YTctYjVmOTBhNDJiODRhIiwic3ViIjoibmlyYW5qYW4uZ0Bpc3RlZXIuY29tIiwicm9sZSI6IlVzZXIiLCJpc3MiOiJBcHBTdGVlciIsImZ1bGxOYW1lIjoiR3V0aGEgTmlyYW5qYW4iLCJvcmdEb21haW5OYW1lIjoiaXN0ZWVyLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6Im5pcmFuamFuLmdAaXN0ZWVyLmNvbSIsInV1aWQiOiI4MDJjYjUzZi01YzExLTRjNjgtYmU0Yi1hZGQwZGE3Mzg2MDYiLCJyb2xlVVVJRCI6IjRhYzczZDgxLTQyNGItMTFlZS1iMmNhLTAwMjI0ODRiZGNkMiIsImRldmljZWlkIjpudWxsLCJ1aWQiOiI0YTgyMDIzOS1lMWM5LTRjZmEtYjc4Ni01ZGIxZjQ2MWUwYjMiLCJ4LWZvcndhcmRlZC1ob3N0IjoiY2xvdWQuYXBwc3RlZXIuaW8iLCJ0ZW5hbnRJZCI6MjM5LCJleHAiOjE3NDc4NDUyMjcsImlhdCI6MTc0NzgyNzIyN30.bC0tFbsI3RGa0l39_hnt0rwG14wJTH0pGDUaiDgUfu0";
    const token =  "eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiOWFlNDNjNDgtNTA3My00ZTJlLTk4YTctYjVmOTBhNDJiODRhIiwic3ViIjoibmlyYW5qYW4uZ0Bpc3RlZXIuY29tIiwicm9sZSI6IlVzZXIiLCJpc3MiOiJBcHBTdGVlciIsImZ1bGxOYW1lIjoiR3V0aGEgTmlyYW5qYW4iLCJvcmdEb21haW5OYW1lIjoiaXN0ZWVyLmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6Im5pcmFuamFuLmdAaXN0ZWVyLmNvbSIsInV1aWQiOiI4MDJjYjUzZi01YzExLTRjNjgtYmU0Yi1hZGQwZGE3Mzg2MDYiLCJyb2xlVVVJRCI6IjRhYzczZDgxLTQyNGItMTFlZS1iMmNhLTAwMjI0ODRiZGNkMiIsImRldmljZWlkIjpudWxsLCJ1aWQiOiI3MTM0MTQzNy00OTkyLTRkNmYtOWU4NS0zNjkwNjk2MWM4ODkiLCJ4LWZvcndhcmRlZC1ob3N0IjoiY2xvdWQuYXBwc3RlZXIuaW8iLCJ0ZW5hbnRJZCI6MjM5LCJleHAiOjE3NDc5MDY1NDksImlhdCI6MTc0Nzg4ODU0OX0.1D7RE6_Ss4ggOdjNbrNsBguCKvKEK61ZwDJBeaqwGxk"

    cy.request({
      method: "GET",
      url: "https://cloud.appsteer.io/user/#/u/dashboard/295/2203311337054500",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(response.body);
    });
  });
});
