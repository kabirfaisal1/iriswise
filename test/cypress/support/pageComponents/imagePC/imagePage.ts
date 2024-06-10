class ImagePO
{
	selectors = {
		icon: () => cy.get( '[data-testid="ImageGeneration_page_header_icon"]' ),
		pageHeader: () =>
			cy.get( '[data-testid="ImageGeneration_page_header_container"]' ),
		headerTitle: () =>
			cy.get( '[data-testid="ImageGeneration_page_header"]' ),
		headerSubtitle: () =>
			cy.get( '[data-testid="ImageGeneration_page_header_subtitle"]' ),
		image_input: () => cy.get( '[data-testid="image_generation_prompt"]' ),
		image_amountDD: () => cy.get( '[data-testid="image_generation_amount"]' ),
		image_amountOption: () => cy.get( '[data-testid="image_generation_amount"] select  ' ),
		image_resolutionDD: () => cy.get( '[data-testid="image_generation_resolution"]' ),
		image_resolutionOption: () => cy.get( '[data-testid="image_generation_resolution"] select' ),
		image_generate: () => cy.get( '[data-testid="image_generation_button"]' ),
		image_result: () => cy.get( '[data-testid="image_generation_result"]' ),
		image_downloadButton: () => cy.get( '[data-testid="image_generation_download_button"]' ),

	};
	verifyImageHeader ( pageTitle: string, pageSubtitle: string )
	{
		cy.step( 'Verify image Header icon' );
		this.selectors.icon().should( 'be.visible' );
		cy.step( 'Verify image Header Title' );
		this.selectors.headerTitle().should( 'be.visible' ).and( 'include.text', pageTitle );
		cy.step( 'Verify image Header subtitle' );
		this.selectors.headerSubtitle().should( 'be.visible' ).and( 'include.text', pageSubtitle );
		cy.verifyEmptyBody( true, 'No images generated' );

	}

	enterImageInput ( inputValue: string )
	{
		cy.step( 'Enter image text' );
		this.selectors
			.image_input()
			.should( 'be.visible' ).type( inputValue ).should( 'have.value', inputValue );

	}
	selectImageAmount ( amountOfImages: string )
	{
		cy.step( 'Click on amount of photo dropdown' );
		this.selectors.image_amountDD().should( 'be.visible' ).click();
		cy.step( 'Checking if image amount dropdown is displayed' );
		this.selectors.image_amountOption().should( 'exist' );
		cy.step( 'Selecting image amount' );
		cy.selectDropDownOptions( this.selectors.image_amountOption(), amountOfImages );
	}
	selectImageResolution ( resolution: string )
	{
		cy.step( 'Click on resolution dropdown' );
		this.selectors.image_resolutionDD().should( 'be.visible' ).click();
		cy.step( 'Checking resolution dropdown options is displayed' );
		this.selectors.image_resolutionOption().should( 'exist' );
		cy.step( 'Selecting resolution option type' );
		cy.selectDropDownOptions( this.selectors.image_resolutionOption(), resolution );
	}
	clickImageGenerate ()
	{
		cy.step( 'Click on Generate button' );
		this.selectors
			.image_generate()
			.should( 'be.visible' ).click();
		cy.step( 'Verify image is loading' );
		cy.verifyLoader();
	}
	verifyImageGenerated ( amountOfImages: number )
	{
		cy.step( 'Verify Empty body is not displayed' );
		cy.verifyEmptyBody( false );
		cy.step( 'Verify  image is displayed' );
		this.selectors.image_result().should( 'be.visible' ).and( 'have.length', amountOfImages );
		cy.step( 'Verify image has download button' );
		this.selectors.image_downloadButton().should( 'be.visible' );
	}
}

export default ImagePO;
