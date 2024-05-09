/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
declare module 'cypress' {
    interface Chainable<Subject = any>
    {
        loginToAuth0 (): Chainable<void>;
    }
}

// Cypress.Commands.add( 'loginToAuth0' as keyof Cypress.Chainable, ( username: string, password: string ) => {
//     cy.visit( '/dashboard' );
//     cy.request( {
//         method: 'POST',
//         url: `http://localhost:5173/sign-in`,
//         body: {
//             username,
//             password,
//         },
//     } );
// });
