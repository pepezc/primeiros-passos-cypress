import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfo from '../pages/myInfo'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new MyInfo()

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Sucess', () => {

    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.confirmDashboardPage()

    menuPage.accessMyInfo()

    myInfo.nameFill()

    myInfo.employeeIdFill()

    myInfo.otherIdFill()

    myInfo.driversLicenseFill()

    myInfo.nationalityFill()

    myInfo.maritalStatusFill()

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})