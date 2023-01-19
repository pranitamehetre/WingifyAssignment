describe('check login functionality', function(){
    beforeEach(function(){
        cy.visit('https://sakshingp.github.io/assignment/login.html')
    })

    it('check url for login page',function(){
        cy.url().should('include',"login.html")
    })

    it('check login functionality',function(){
        cy.get('#username').type('pranita')
        cy.get('#password').type('pranita')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('.logo-label').should('contain',"DEMO")
    })

    it('check login functionality with space as input',function(){
        cy.get('#username').type('  ')
        cy.get('#password').type('  ')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('.logo-label').should('contain',"DEMO")
        
    })

    it('check login functionality with special symbol as input',function(){
        cy.get('#username').type('@#')
        cy.get('#password').type('@#')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('.logo-label').should('contain',"DEMO")
    })

    it('click directly on login button without username & password  showing error msg',function(){
        cy.get('#log-in').click()
        cy.wait(4000)
        cy.get('div[role="alert"]').last().should('contain',"Both Username and Password")
    })

    it('check login without entering password error msg shown',function(){
        cy.get('#username').type('pranita')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('div[role="alert"]').last().should('contain',"Password must be present")
    })

    it.only('check login functionality without click on Remember me button',function(){
        cy.get('#username').type('pranita')
        cy.get('#password').type('pranita')
        cy.get('#log-in').click()
        cy.get('.logo-label').should('contain',"DEMO")
    })

    it.only('check login without entering username error msg shown',function(){
        cy.get('#password').type('pranita')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('div[role="alert"]').last().should('contain',"Username must be present")
    })

    it('After login check for AMOUNT header clickable',function(){
        cy.get('#username').type('pranita')
        cy.get('#password').type('pranita')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('#amount').click().should('have.id',"amount")
    })

    it('After successfully login check page landed on homepage',function(){
        cy.get('#username').type('pranita')
        cy.get('#password').type('pranita')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.url().should('include',"home.html")
    })

    it('click the AMOUNT header in the transaction table and check the values are sorted',function(){
        cy.get('#username').type('pranita')
        cy.get('#password').type('pranita')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('#amount').click()
        cy.get('.text-right').each(function(el,index){
            if(index>0){
                let a= (el.text().split(' USD'))
                cy.log(Number(a[0]))
                // if(a[0]==100){
                //     cy.log('pass')
                // }
            }
        })
    })

})