class SignInPage
{
	selectors = {
		emailAddress: () => cy.get( '#identifier-field' ),
		continueButton: () => cy.get( '[class="cl-internal-2iusy0"]' ),
		password: () => cy.get( '#password-field' ),
	};
	enterEmailAddress ( emailAddress: string )
	{
		this.selectors.emailAddress().type( emailAddress, { log: false } );
	}
	clickOnContinueButton ()
	{
		this.selectors.continueButton().should( 'have.text', 'Continue' ).click();
	}

	enterPassword ( password: string )
	{
		this.selectors.password().type( password, { log: false } );
	}
}

export default SignInPage;
