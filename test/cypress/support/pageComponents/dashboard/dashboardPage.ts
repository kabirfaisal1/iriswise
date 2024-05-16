
class DashboardPO
{
	selectors = {
		icon: () => cy.get( '[data-testid="dashboard_page_header_icon"]' ),
		h2Title: () => cy.get( '[data-testid="dashboard_page_header"]' ),
		subtitle: () => cy.get( '[data-testid="dashboard_page_header_subtitle"]' ),
	};
	verifyDashboardHeader ( ...args: string[] )
	{
		this.selectors.icon().should( 'be.visible' );
		this.selectors.h2Title().should( 'be.visible' ).and( 'have.text', args[ 0 ] );
		this.selectors.subtitle().should( 'be.visible' ).and( 'have.text', args[ 1 ] );
	}

}

export default DashboardPO;
