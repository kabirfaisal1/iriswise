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
declare global
{
    namespace Cypress
    {
        interface Chainable<Subject = any>
        { // Add a generic type parameter to the Chainable interface declaration
            signIn (): Chainable<void>; // Add the custom command name "signIn" to the interface declaration
        }
    }
}

Cypress.Commands.add( 'signIn' as keyof Cypress.Chainable, () =>
{
    // cy.log( `Signing in.` );
    // cy.visit( `/` );

    // cy.window()
    //     .should( ( window: Window ) =>
    //     {
    //         expect( window ).to.not.have.property( `Clerk`, undefined );
    //         expect( window.Clerk.isReady() ).to.eq( true );
    //     } );
    // cy.clearCookies( { domain: window.location.domain } );
    // await window.Clerk.client.signIn.create( {
    //     identifier: Cypress.env( `test_email` ),
    //     password: Cypress.env( `test_password` ),
    // } );

    // await window.Clerk.setActive( {
    //     session: res.createdSessionId,
    // } );

    // cy.log( `Finished Signing in.` );
} );
