/// <reference types="cypress" />
import LoginPage from "../page_object_model/LoginPage";
beforeEach('visit url',function(){
    LoginPage.VisitPage()
})

describe('verify the login page',function(){

    it('TC01 verify URL',function(){
        LoginPage.loadLoginPage()
    })

    it('TC02 verify login page with valid username and password',function(){
        LoginPage.checkLogin('pranita','pranita')
    })

    it('TC03 verify login functionality with space as username and password',function(){
        LoginPage.checkLogin('  ','  ')
    })

    it('TC04 verify login functionality with special symbol as input',function(){
        LoginPage.checkLogin('@#','@$')
    })

    it('TC05 check login without entering password error msg shown',function(){
        LoginPage.withoutUserPass()
    })

    it('TCO6 check login without entering username error msg shown',function(){
        LoginPage.withoutUsername('pranita')
    })

    it('TC07 check login without entering password error msg shown',function(){
        LoginPage.withoutPassword('pranita')
    })

    it('TC08 check login functionality without click on Remember me button',function(){
        LoginPage.withoutRememberMe('pranita','pranita')
    })

    it('TC09 After successfully login check page landed on homepage',function(){
        LoginPage.checkLogin('pranita','pranita')
        LoginPage.homePageURL()
    })

    it('TC10 verify table length',function(){
        LoginPage.checkLogin('pranita','pranita')
        LoginPage.checkTable()

    })
     
    it('TC11 After login check for AMOUNT header clickable',function(){
        LoginPage.checkLogin('pranita','pranita')
        LoginPage.clickAmountHeader()
    })

    it('TC12 verify element are sorted',function(){
        LoginPage.checkLogin('pranita','pranita')
        LoginPage.sortingElement()
    })
})