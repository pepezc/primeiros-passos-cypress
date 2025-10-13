class MyInfo{
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

    nameFill(){
        cy.get(this.selectorList().firstNameField).clear().type('firstName Test')
        cy.get(this.selectorList().middleNameField).clear().type('middleName Test')
        cy.get(this.selectorList().lastNameField).clear().type('lastName Test')
    }

    employeeIdFill(){
        cy.get(this.selectorList().genericField).eq(4).clear().type('EmpTest')
    }

    otherIdFill(){
        cy.get(this.selectorList().genericField).eq(5).clear().type('Other Id Test')
    }

    driversLicenseFill(){
        cy.get(this.selectorList().genericField).eq(6).clear().type('Drivers License Test')
        cy.get(this.selectorList().dateField).eq(0).clear().type('2025-11-09')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should(('contain'), 'Successfully Updated')
    }

    nationalityFill(){
        cy.get(this.selectorList().comboBox).eq(0).click()
        cy.get('div[role="option"]').contains('Brazilian').click()
    }

    maritalStatusFill(){
        cy.get(this.selectorList().comboBox).eq(1).click()
        cy.get('div[role="option"]').contains('Other').click()
    }   
}

export default MyInfo