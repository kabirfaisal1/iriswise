
class NavigationBar
{
    selectors = {
        headerLogo: () => cy.get( '[data_testid="TDO"]' ),
        headerTitle: () => cy.get( 'h1[data-testid="landing_header_title"]' ),
        login: () => cy.get( '[data_testid="login_button"]' ),
        register: () => cy.get( '[data_testid="register_button"]' ),
    };
    verifyLandingPage ()
    {
        this.selectors.headerTitle().should( 'include.text', 'Hello, world! LandingPage' );
    }
    clickOnLogin ()
    {
        this.selectors.login().should( 'have.text', 'Login' ).click();
        cy.url().should( 'include', '/sign-in' );
    }

    clickOnRegister ()
    {
        this.selectors.register().should( 'have.text', 'Register' ).click();
        cy.url().should( 'include', '/sign-up' );
    }
}

export default NavigationBar;
