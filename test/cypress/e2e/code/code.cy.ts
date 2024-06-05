import CodePO from '../../support/pageComponents/codePC/codePage';
const Code = new CodePO();

describe( 'User Code', () =>
{
    beforeEach( () =>
    {
        cy.loginToAuth0(
            Cypress.env( 'CYPRESS_EMAIL_ADDRESS' ),
            Cypress.env( 'CYPRESS_PASSWORD' ),
        );
    } );

    it( 'Verify Able to nev From sidebar', () =>
    {
        const title = 'Code Generation';
        const subtitle = 'Produce code effortlessly from descriptive text.';
        cy.sidebarNavigateScreen( title );
        Code.verifyCodeHeader( title, subtitle );
    } );
    it( 'Verify Able to nev From dashboard', () =>
    {
        const title = 'Code Generation';
        const subtitle = 'Produce code effortlessly from descriptive text.';
        cy.dashboardNavigate( title );
        Code.verifyCodeHeader( title, subtitle );
    } );
    it( 'Generate Message', () =>
    {
        const title = 'Code Generation';
        const inputValue = 'a modal using react hook and talwind';
        cy.sidebarNavigateScreen( title );
        Code.enterCodeInput( inputValue );
        Code.verifyCodeGenerated();

    } );
} );
