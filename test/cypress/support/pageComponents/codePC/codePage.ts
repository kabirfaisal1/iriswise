class codePO
{
	selectors = {
		icon: () => cy.get( '[data-testid="code_page_header_icon"]' ),
		pageHeader: () =>
			cy.get( '[data-testid="code_page_header_container"]' ),
		headerTitle: () =>
			cy.get( '[data-testid="code_page_header"]' ),
		headerSubtitle: () =>
			cy.get( '[data-testid="code_page_header_subtitle"]' ),
		code_input: () => cy.get( '[data-testid="code_input"]' ),
		code_generate: () => cy.get( '[data-testid="code_Generate"]' ),
		code_message: () => cy.get( '[data-testid="code_message"]' ),
		code_copyButton: () => cy.get( '[data-testid="code_copy_button"]' ),

	};
	verifyCodeHeader ( pageTitle: string, pageSubtitle: string )
	{
		cy.step( 'Verify code Header icon' );
		this.selectors.icon().should( 'be.visible' );
		cy.step( 'Verify code Header Title' );
		this.selectors.headerTitle().should( 'be.visible' ).and( 'include.text', pageTitle );
		cy.step( 'Verify code Header subtitle' );
		this.selectors.headerSubtitle().should( 'be.visible' ).and( 'include.text', pageSubtitle );
		cy.verifyEmptyBody( true, 'No code generated' );

	}

	enterCodeInput ( inputValue: string )
	{
		cy.step( 'Enter code text' );
		this.selectors
			.code_input()
			.should( 'be.visible' ).type( inputValue ).should( 'have.value', inputValue );

	}
	clickCodeGenerate ()
	{
		cy.step( 'Click on Generate button' );
		this.selectors
			.code_generate()
			.should( 'be.visible' ).click();
		cy.step( 'Verify code is loading' );
		cy.verifyLoader();
	}
	verifyCodeGenerated ()
	{
		cy.step( 'Verify Empty body is not displayed' );
		cy.verifyEmptyBody( false );
		cy.step( 'Verify code code is displayed' );
		this.selectors.code_message().should( 'be.visible' ).and( 'have.length', 2 );
		this.selectors.code_copyButton().should( 'be.visible' );
	}
}

export default codePO;
