/// <reference types="cypress" />
import LoginPage from "../page_object_model/LoginPage";
before('visit url',function(){
    LoginPage.loadLoginPage()
})
describe('verify the login page',function(){
    it('verify username and password',function(){
        LoginPage.checkLogin('pranita','pranita')
    })
})