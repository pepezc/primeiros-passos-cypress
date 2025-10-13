class MenuPage{
    selectorlist(){
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            dashboardButton: '[href="/web/index.php/dashboard/index"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']"
        }

        return selectors;
    }

    accessAdmin(){
        cy.get(this.selectorlist().adminButton).click()
    }

    accessPim(){
        cy.get(this.selectorlist().pimButton).click()
    }

    accessLeave(){
        cy.get(this.selectorlist().accessLeave).click()
    }

    accessTime(){
        cy.get(this.selectorlist().timeButton).click()
    }

    accessRecruitment(){
        cy.get(this.selectorlist().recruitmentButton).click()
    }

    accessMyInfo(){
        cy.get(this.selectorlist().myInfoButton).click()
    }

    accessPerformance(){
        cy.get(this.selectorlist().performanceButton).click()
    }

    accessDashboard(){
        cy.get(this.selectorlist().dashboardButton).click()
    }

    accessDirectory(){
        cy.get(this.selectorlist().directoryButton).click()
    }

    accessMaintenance(){
        cy.get(this.selectorlist().maintenanceButton).click()
    }

    accessClaim(){
        cy.get(this.selectorlist().claimButton).click()
    }

    accessBuzz(){
        cy.get(this.selectorlist().buzzButton).click()
    }

}

export default MenuPage