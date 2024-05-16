import DashboardPO from '../../support/pageComponents/dashboard/dashboardPage';
const Dashboard = new DashboardPO();

describe( 'User Dashboard', () =>
{
    beforeEach( () =>
    {
        cy.loginToAuth0(
            Cypress.env( 'CYPRESS_EMAIL_ADDRESS' ),
            Cypress.env( 'CYPRESS_PASSWORD' ),
        );
    } );

    it( 'Verify Dashboard header', () =>
    {
        const title = 'Explore the Power of AI';
        Dashboard.verifyDashboardHeader( title );
    } );

    it( 'Verify Tool Container', () =>
    {
        const tools = {
            conversation: 'Conversation',
            audioGeneration: 'Audio Generation',
            imageGeneration: 'Image Generation',
            videoGeneration: 'Video Generation',
            articleSummarizer: 'Article Summarizer',
            profile: 'Profile',
            buyCredits: 'Buy Credits',
        };
        Dashboard.VerifyToolContainer(
            tools.conversation,
            tools.audioGeneration,
            tools.imageGeneration,
            tools.videoGeneration,
            tools.articleSummarizer,
            tools.profile,
            tools.buyCredits,
        );
    } );
} );
