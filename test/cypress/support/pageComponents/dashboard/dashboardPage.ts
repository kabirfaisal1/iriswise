class DashboardPO
{
	selectors = {
		icon: () => cy.get( '[data-testid="dashboard_page_header_icon"]' ),
		headerContainer: () =>
			cy.get( '[data-testid="dashboard_page_header_container"]' ),
		h2Title: () => cy.get( '[data-testid="dashboard_page_header"]' ),
		subtitle: () => cy.get( '[data-testid="dashboard_page_header_subtitle"]' ),
		toolContainer: () => cy.get( '[data-testid="dashboard_tool_cards"]' ),
	};
	verifyDashboardHeader ( ...header: string[] )
	{
		cy.step( 'Verify Dashboard Header Icon and Title' );
		this.selectors.icon().should( 'be.visible' );
		header.map( text =>
		{
			this.selectors
				.headerContainer()
				.should( 'be.visible' )
				.and( 'include.text', text );
		} );
	}
	VerifyToolContainer ( ...toolList: string[] )
	{
		cy.step( 'Verify Tool Container' );
		toolList.map( tool =>
		{
			this.selectors
				.toolContainer()
				.find( 'h3' )
				.should( 'be.visible' )
				.and( 'include.text', tool );
		} );
	}
}

export default DashboardPO;
