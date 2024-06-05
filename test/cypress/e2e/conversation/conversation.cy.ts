import ConversationPO from '../../support/pageComponents/conversationPC/conversationPage';
const Conversation = new ConversationPO();

describe( 'User Conversation', () =>
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
        const title = 'Conversation';
        const subtitle = 'Chat with the smartest AI';
        cy.sidebarNavigateScreen( title );
        Conversation.verifyConversationHeader( title, subtitle );
    } );
    it( 'Verify Able to nev From dashboard', () =>
    {
        const title = 'Conversation';
        const subtitle = 'Chat with the smartest AI';
        cy.dashboardNavigate( title );
        Conversation.verifyConversationHeader( title, subtitle );
    } );
    it( 'Generate Message', () =>
    {
        const title = 'Conversation';
        const inputValue = 'how many galaxies in the universe';
        cy.sidebarNavigateScreen( title );
        Conversation.enterConversationInput( inputValue );
        Conversation.verifyGenerateMessage();

    } );
} );
