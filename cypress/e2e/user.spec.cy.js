import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('User Info Orange HRM Tests', () => {

  it('User Info Update - Sucess', () => {

    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.confirmDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('Sven', 'Void', 'Lich')

    myInfoPage.fillEmployeeDetails('Emp.ID', 'Other', '112233', '2050-09-11', 'Brazilian', 'Other')

    myInfoPage.saveForm()

  })
})