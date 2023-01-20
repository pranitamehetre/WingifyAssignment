/// <reference types="cypress" />
class LoginPage{
    static VisitPage(){
        cy.visit('https://sakshingp.github.io/assignment/login.html')
    }

    static loadLoginPage(){
         cy.url().should('include',"login.html")
    }

    static checkLogin(username,password){
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('.logo-label').should('contain',"DEMO")
    }

    static withoutUserPass(){
        cy.get('#log-in').click()
        cy.wait(4000)
        cy.get('div[role="alert"]').last().should('contain',"Both Username and Password")
    }

    static withoutUsername(password){
        cy.get('#password').type(password)
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('div[role="alert"]').last().should('contain',"Username must be present")
    }

    static withoutPassword(username){
        cy.get('#username').type(username)
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('div[role="alert"]').last().should('contain',"Password must be present")
    }

    static withoutRememberMe(username,password){
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#log-in').click()
        cy.get('.logo-label').should('contain',"DEMO")
    }

    static homePageURL(){
        cy.url().should('include',"home.html")
    }

    static checkTable(){
        cy.get('#transactionsTable tbody tr ').should('have.length',6)
    }

    static clickAmountHeader(){
        cy.get('#amount').click().should('have.id',"amount")
    }

    static sortingElement(){
        cy.get('table>thead>tr>th').last().should('be.visible').click()
        let arr = []
        
        cy.get('table>tbody>tr').each(function (el) {

            let element = (el).find('td').last().text()
            let ele = (element.replace('USD', ' ').trim())
            arr.push(parseFloat(ele.split(' ').join('').replace(',', '')))
        }).then(function () {
            cy.log(arr)
            expect(arr).to.eq(arr.sort())
        })
    }
    
}
export default LoginPage;
