import ImagePO from '../../support/pageComponents/imagePC/imagePage';
const Image = new ImagePO();

describe( 'User Image', () =>
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
        const title = 'Image Generation';
        const subtitle = 'Let your imagination run wild!';
        cy.sidebarNavigateScreen( title );
        Image.verifyImageHeader( title, subtitle );
    } );
    it( 'Verify Able to nev From dashboard', () =>
    {
        const title = 'Image Generation';
        const subtitle = 'Let your imagination run wild!';
        cy.dashboardNavigate( title );
        Image.verifyImageHeader( title, subtitle );
    } );
    it.only( 'Generate Image', () =>
    {
        const title = 'Image Generation';
        const inputValue = 'a sunset in hawaii';
        cy.sidebarNavigateScreen( title );
        Image.enterImageInput( inputValue );
        Image.selectImageAmount( '5 Photos' );
        Image.selectImageResolution( '1024x1024' );
        Image.clickImageGenerate();
        Image.verifyImageGenerated( 5 );

    } );
} );
