/// <reference types="cypress" />
import SignInPage from './pageComponents/sign_in/signinPage';
const SignIn = new SignInPage();

declare global
{
    namespace Cypress
    {
        interface Chainable<Subject>
        {
            loginToAuth0 ( username: string, password: string ): Chainable<any>;
        }
    }
}

Cypress.Commands.add( 'loginToAuth0', ( username: string, password: string ) =>
{
    cy.visit( '/dashboard' );
    SignIn.enterEmailAddress( username );
    SignIn.clickOnContinueButton();
    SignIn.enterPassword( password );
    SignIn.clickOnContinueButton();
    cy.url().should( 'include', 'dashboard' );
} );
