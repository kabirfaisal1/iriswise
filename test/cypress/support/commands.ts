/// <reference types="cypress" />
import SignInPage from './pageComponents/sign_inPC/signinPage';
const SignIn = new SignInPage();

declare global
{
    namespace Cypress
    {
        interface Chainable<Subject>
        {
            loginToAuth0 ( username: string, password: string ): Chainable<any>;
            sidebarNavigateScreen ( navigateTo: string ): Chainable<any>;
            dashboardNavigate ( navigateScreen: string ): Chainable<any>;
            verifyEmptyBody ( isDisplayed: boolean ): Chainable<any>;
            verifyLoader (): Chainable<any>;
            selectDropDownOptions ( selectorEl: Cypress.Chainable<JQuery>, option: Cypress.Chainable<JQuery>, value: string ): Chainable<any>;
        }
    }
}

Cypress.Commands.add( 'loginToAuth0', ( username, password ) =>
{
    cy.log( 'Login to Auth0' );

    cy.visit( '/sign-in' );
    SignIn.enterEmailAddress( username );
    SignIn.clickOnContinueButton();
    SignIn.enterPassword( password );
    SignIn.clickOnContinueButton();
    cy.url().should( 'include', 'dashboard' );

} );




Cypress.Commands.add( 'sidebarNavigateScreen', ( navigateTo: string ) =>
{
    cy.step( 'Navigate to ' + navigateTo );
    cy.get( '[data-testid="sidebar_nav"]' ).should( 'be.visible' ).find( 'li a' ).each( ( navItem ) =>
    {
        if ( navItem.text() === navigateTo )
        {
            cy.wrap( navItem ).click();
            cy.url().should( 'include', navigateTo.toLowerCase() );
        }

    } );
} );

Cypress.Commands.add( 'dashboardNavigate', ( navigateTo: string ) =>
{
    cy.step( 'Dashboard navigate to ' + navigateTo );
    cy.get( '[data-testid="dashboard_tool_container"]' ).should( 'be.visible' ).find( 'h3' ).each( ( navItem ) =>
    {
        if ( navItem.text() === navigateTo )
        {
            cy.wrap( navItem ).click();
            cy.url().should( 'include', navigateTo.toLowerCase() );
        }

    } );
} );

Cypress.Commands.add( 'verifyEmptyBody', ( isDisplayed: boolean ) =>
{
    if ( isDisplayed )
    {
        cy.step( 'Verify Empty Body' );
        cy.get( '[data-testid="empty_body_image"]' ).should( 'be.visible' );
        cy.get( '[data-testid="empty_body_paragraph"]' ).should( 'be.visible' ).and( 'include.text', 'No conversation started' );
    } else
    {
        cy.step( 'Verify Empty Body should not exist' );
        cy.get( '[data-testid="empty_body_image"]' ).should( 'not.exist' );
        cy.get( '[data-testid="empty_body_paragraph"]' ).should( 'not.exist' );

    }
} );

Cypress.Commands.add( 'verifyLoader', () =>
{
    cy.step( 'Verify Loader Body' );
    cy.get( '[data-testid="loader_image"]' ).should( 'be.visible' );
    cy.get( '[data-testid="loader_paragraph"]' ).should( 'be.visible' ).and( 'include.text', 'Iris is thinking...' );
} );

Cypress.Commands.add( 'selectDropDownOptions', ( selectorEl, options, value ) =>
{

    cy.step( 'Click on DropDown button' );
    selectorEl.click();
    cy.step( 'Select DropDown Options' );
    options.each( ( option ) =>
    {
        if ( option.text() === value )
        {
            cy.wrap( option ).click();
        }
    } );

} );
