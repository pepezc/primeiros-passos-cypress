class MyInfoPage{
    selectorList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input',
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: ".oxd-button[type='submit']",
            comboBox: ".oxd-select-text" 
        }

        return selectors;
    }

    fillPersonalDetails(firstName,middleName,lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driversLicenseDate, nationality, marital){
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().comboBox).eq(0).click()
        cy.get('div[role="option"]').contains(nationality).click()
        cy.get(this.selectorList().comboBox).eq(1).click()
        cy.get('div[role="option"]').contains(marital).click()
    }

    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should(('contain'), 'Successfully Updated')
    }
}

export default MyInfoPage