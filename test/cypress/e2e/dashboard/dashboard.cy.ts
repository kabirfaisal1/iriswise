
import DashboardPO from '../../support/pageComponents/dashboard/dashboardPage';
const Dashboard = new DashboardPO();
describe( 'User Dashboard', () =>
{
    beforeEach( () =>
    {
        cy.loginToAuth0( Cypress.env( 'CYPRESS_EMAIL_ADDRESS' ), Cypress.env( 'CYPRESS_PASSWORD' ) );
    } );

    it( 'Verify Dashboard header', () =>
    {
        const title = 'Dashboard';
        const subtitle = 'Explore the Power of AI';
        Dashboard.verifyDashboardHeader( title, subtitle );


    } );

} );
