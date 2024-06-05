class codePO
{
	selectors = {
		icon: () => cy.get( '[data-testid="conversation_page_header_icon"]' ),
		pageHeader: () =>
			cy.get( '[data-testid="conversation_page_header_container"]' ),
		headerTitle: () =>
			cy.get( '[data-testid="conversation_page_header"]' ),
		headerSubtitle: () =>
			cy.get( '[data-testid="conversation_page_header_subtitle"]' ),
		conversation_input: () => cy.get( '[data-testid="conversation_input"]' ),
		conversation_generate: () => cy.get( '[data-testid="conversation_Generate"]' ),
		conversation_message: () => cy.get( '[data-testid="conversation_message"]' ),

	};
	verifyConversationHeader ( pageTitle: string, pageSubtitle: string )
	{
		cy.step( 'Verify Conversation Header icon' );
		this.selectors.icon().should( 'be.visible' );
		cy.step( 'Verify Conversation Header Title' );
		this.selectors.headerTitle().should( 'be.visible' ).and( 'include.text', pageTitle );
		cy.step( 'Verify Conversation Header subtitle' );
		this.selectors.headerSubtitle().should( 'be.visible' ).and( 'include.text', pageSubtitle );
		cy.verifyEmptyBody( true );

	}

	enterConversationInput ( inputValue: string )
	{
		cy.step( 'Enter Conversation text' );
		this.selectors
			.conversation_input()
			.should( 'be.visible' ).type( inputValue ).should( 'have.value', 'how many galaxies in the universe' );

	}
	clickConversationGenerate ()
	{
		cy.step( 'Click on Generate button' );
		this.selectors
			.conversation_generate()
			.should( 'be.visible' ).click();
		cy.verifyLoader();
	}
	verifyGenerateMessage ()
	{
		cy.step( 'Verify Message is Generated' );
		this.selectors
			.conversation_generate()
			.should( 'be.visible' ).click();
		cy.step( 'Verify Message is loading' );
		cy.verifyLoader();
		cy.verifyEmptyBody( false );
		cy.step( 'Verify conversation message is displayed' );
		this.selectors.conversation_message().should( 'be.visible' ).and( 'have.length', 2 );
	}
}

export default codePO;
