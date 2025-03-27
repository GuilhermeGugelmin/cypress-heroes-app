describe('Login', () => {


    const BASE_URL = 'http://localhost:3000'


    const selectorsList = {
        loginButton: 'nav > .flex > li', 
        emailLoginField: '[data-cy="email"]',
        passwordLoginField: '[data-cy="password"]',
        signInButton: '.bg-blue-700',
        checkLoginFail: '.text-red-500',  
    }


    const userData = {
        loginEmailAdmin: 'admin@test.com',
        loginEmailNormal: 'test@test.com',
        loginPassword: 'test123',
        loginFailEmail: 'fail@fail.com',
        loginFailPassword: '123456',
        checkLogin: 'Logout',
    }


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


    it('Login Success - Admin', () => {
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.contains(userData.checkLogin)
    })
    

/////////////////////////////////////////////////////////////////////////////////////////


    it('Login Success - Normal', () => {
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailNormal)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.contains(userData.checkLogin)
    })


    /////////////////////////////////////////////////////////////////////////////////////////


    it('Login Fail - Email', () => {
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginFailEmail)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.get(selectorsList.checkLoginFail)
    })


/////////////////////////////////////////////////////////////////////////////////////////


    it('Login Fail - Password', () => {
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
        cy.get(selectorsList.passwordLoginField).type(userData.loginFailPassword)
        cy.get(selectorsList.signInButton).click()
        cy.get(selectorsList.checkLoginFail)
    })

    
})