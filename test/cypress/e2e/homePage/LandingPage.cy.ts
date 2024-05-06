import NavigationBar from '../../support/components/navigations/navigation';

const Navigation = new NavigationBar();
describe( 'Verify Landing Page', () =>
{
    beforeEach( () =>
    {
        cy.visit( '/' );
        Navigation.verifyLandingPage();
    } );

    it( 'Click on Login to go to sign-in page', () =>
    {
        Navigation.clickOnLogin();
    } );
    it( 'Click on Register to go to sign-up page', () =>
    {
        Navigation.clickOnRegister();
    } );

} );
