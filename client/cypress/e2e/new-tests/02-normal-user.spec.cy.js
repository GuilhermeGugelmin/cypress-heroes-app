describe('Normal User', () => {

    
    const BASE_URL = 'http://localhost:3000'


    const selectorsList = {
        loginButton: 'nav > .flex > li', 
        emailLoginField: '[data-cy="email"]',
        passwordLoginField: '[data-cy="password"]',
        signInButton: '.bg-blue-700',
        body: '.flex-wrap',
        numberFansField: '[data-cy="fans"]',
        likeButton: "[data-cy='like']",
        savesHeroField: "[data-cy='saves']",
        hideHeroButton: "[data-cy='money']",
        yesHideHeroButton: ".text-white",
        noHideHeroButton: '.gap-4 > .gap-2 > .text-gray-800'
    }


    const userData = {
        loginEmailAdmin: 'admin@test.com',
        loginEmailNormal: 'test@test.com',
        loginPassword: 'test123'
    }
 

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


    it('Like Hero', () => {
        
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailNormal)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()

        // CAPTURE NUMBER OF FANS - BEFORE
        cy.get(selectorsList.numberFansField).eq(0).invoke('text').then((text1) => {
        cy.wrap(text1).as('text1')
        })

        // LIKE HERO
        cy.get(selectorsList.likeButton).eq(0).click()
        cy.wait(500)

        // CAPTURE NUMBER OF FANS - AFTER
        cy.get(selectorsList.numberFansField).eq(0).invoke('text').then((text2) => {
        cy.wrap(text2).as('text2')
        })

        // COMPARE FANS
        cy.get('@text1').then((text1) => {
        cy.get('@text2').then((text2) => {
        expect(text1).to.not.equal(text2)
        })
        })
    })


    /////////////////////////////////////////////////////////////////////////////////////////


    it('Hire a Hero', () => {
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailNormal)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.wait(500)

        // CAPTURE NUMBER SAVES - BEFORE
        cy.get(selectorsList.savesHeroField).eq(0).invoke('text').then((text1) => {
        cy.wrap(text1).as('text1')
        })

        // HIRE A HERO 
        cy.get(selectorsList.hideHeroButton).eq(0).click()
        cy.get(selectorsList.yesHideHeroButton).click()
        cy.wait(500)

        // CAPTURE NUMBER SAVES - AFTER
        cy.get(selectorsList.savesHeroField).eq(0).invoke('text').then((text2) => {
        cy.wrap(text2).as('text2')
        })

        // COMPARE FANS
        cy.get('@text1').then((text1) => {
        cy.get('@text2').then((text2) => {
        expect(text1).to.not.equal(text2)
        })
        })
    })


/////////////////////////////////////////////////////////////////////////////////////////

        
    it('Decline Hero Hiring', () => {
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailNormal)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.wait(500)

        // CAPTURE NUMBER SAVES - BEFORE
        cy.get(selectorsList.savesHeroField).eq(0).invoke('text').then((text1) => {
        cy.wrap(text1).as('text1')
        })

        // DECLINE HERO HIRING 
        cy.get(selectorsList.hideHeroButton).eq(0).click()
        cy.get(selectorsList.noHideHeroButton).click()
        cy.wait(500)

        // CAPTURE NUMBER SAVES - AFTER
        cy.get(selectorsList.savesHeroField).eq(0).invoke('text').then((text2) => {
        cy.wrap(text2).as('text2')
        })

        // COMPARE FANS
        cy.get('@text1').then((text1) => {
        cy.get('@text2').then((text2) => {
        expect(text1).to.equal(text2)
        })
        })
    })
})