import NavigationBar from '../../support/pageComponents/navigations/navigation';
import SignInPage from '../../support/pageComponents/sign_in/signin_in';

const Navigation = new NavigationBar();
const SignIn = new SignInPage();
describe( 'Login to User Account', () =>
{
    beforeEach( () =>
    {
        cy.visit( '/dashboard', );
        // Navigation.verifyLandingPage();
        // Navigation.clickOnLogin();
    } );

    it( 'Sign-In to User Account', () =>
    {
        SignIn.enterEmailAddress( Cypress.env( 'CYPRESS_EMAIL_ADDRESS' ) );
        SignIn.clickOnContinueButton();
        SignIn.enterPassword( Cypress.env( 'CYPRESS_PASSWORD' ) );
        SignIn.clickOnContinueButton();
        cy.url().should( 'include', 'dashboard' );
        cy.visit( '/dashboard', );
        cy.get( '[data-testid="Conversation_cards"]' ).should( 'have.text', 'Conversation', { timeout: 10000 } );

    } );

} );
