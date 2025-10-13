class DashboardPage{ //classe
    selectorList() { //função/método
        const selectors = { //objeto
            dashboardGrid: ".orangehrm-dashboard-grid"
          }
        
        return selectors;
    }

    confirmDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage