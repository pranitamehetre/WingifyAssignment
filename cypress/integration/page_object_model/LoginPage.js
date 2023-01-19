/// <reference types="cypress" />
class LoginPage{
    static loadLoginPage(){
        cy.visit('https://sakshingp.github.io/assignment/login.html')
        cy.url().should('include',"loginn.html")
    }
    static checkLogin(username,password){
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('.logo-label').should('contain',"DEMO")
    }
    
}
export default LoginPage;
