import ImagePO from '../../support/pageComponents/imagePC/imagePage';
import { amountOptions } from '../../../../app/(root)/imageGeneration/constants';
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
    it( 'Generate 5 Image', () =>
    {
        const title = 'Image Generation';
        const inputValue = 'a sunset in hawaii';
        const amountOptions = '5 Photos';
        const resolution = '1024x1024';
        cy.sidebarNavigateScreen( title );
        Image.enterImageInput( inputValue );
        Image.selectImageAmount( amountOptions );
        Image.selectImageResolution( resolution );
        Image.clickImageGenerate();
        Image.verifyImageGenerated( 5 );
    } );
    it( 'Generate 3 Image', () =>
    {
        const title = 'Image Generation';
        const inputValue = 'a sunset in hawaii';
        const amountOptions = '3 Photos';
        const resolution = '1024x1024';
        cy.sidebarNavigateScreen( title );
        Image.enterImageInput( inputValue );
        Image.selectImageAmount( amountOptions );
        Image.selectImageResolution( resolution );
        Image.clickImageGenerate();
        Image.verifyImageGenerated( 3 );
    } );
    it( 'Generate 1 Image', () =>
    {
        const title = 'Image Generation';
        const inputValue = 'a sunset in hawaii';
        const amountOptions = '1 Photos';
        const resolution = '1024x1024';
        cy.sidebarNavigateScreen( title );
        Image.enterImageInput( inputValue );
        Image.selectImageAmount( amountOptions );
        Image.selectImageResolution( resolution );
        Image.clickImageGenerate();
        Image.verifyImageGenerated( 1 );
    } );
} );
