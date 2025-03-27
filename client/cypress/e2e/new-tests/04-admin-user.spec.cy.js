describe('Admin User', () => {


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
        noHideHeroButton: '.gap-4 > .gap-2 > .text-gray-800',
        editHeroButton: "[data-cy='pencil']",
        editName: "[data-cy='nameInput']",
        editPrice: "[data-cy='priceInput']",
        editFans: "[data-cy='fansInput']",
        editSaves: "[data-cy='savesInput']",
        newPowers: "[value='6']",
        boxEdit: 'select',
        selectImage: '[data-cy="avatarFile"]',
        submitButton: '.bg-blue-700',
        newHeroButton: '.bg-blue-700',
        nameNewHero: "[data-cy='nameInput']", 
        priceNewHero: "[data-cy='priceInput']",
        fansNewHero: "[data-cy='fansInput']",
        savesNewHero: "[data-cy='savesInput']",
        cardsHero: '[data-cy="hero-card"]',
        deleteButton: "[data-cy='trash']",
        confirmDeleteButton: '.bg-red-600',
        declineDeleteButton: '.gap-4 .gap-2 .text-gray-800'
    }


    const userData = {
        loginEmailAdmin: 'admin@test.com',
        loginPassword: 'test123',
        newName: 'Captain Price',
        newPrice: '11',
        newFans: '22',
        newSaves: '33',
        imageCapitain: 'D:/Desktop/TI/QA/cypress-heroes/0011.jpg',
        imageGhost: 'D:/Desktop/TI/QA/cypress-heroes/0022.jpg',
        checkLogin: 'Logout',
        nameNewHero: 'Ghost',
        priceNewHero: '99',
        fansNewHero:  '88',
        savesNewHero: '77'
    }
    

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


    it('Like Hero', () => {
        
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
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

    
/////////////////////////////////////////////////////////////////////////////////////////////////


    it('Hire a Hero', () => {
        
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.wait(500)

        // CAPTURE NUMBER SAVES - BEFORE
        cy.get(selectorsList.savesHeroField).eq(0).invoke('text').then((text1) => {
        cy.wrap(text1).as('text1')
        })

        // HIRE A HERO 
        cy.get(selectorsList.hideHeroButton).eq(0).click()
        cy.get(selectorsList.yesHideHeroButton).eq(1).click()
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


/////////////////////////////////////////////////////////////////////////////////////////////////


    it('Decline Hero Hiring', () => {
        
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
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


/////////////////////////////////////////////////////////////////////////////////////////////////


    it('Hero Edit And Check The Return To Home', () => {
        
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.wait(500)

        // HERO EDIT 
        cy.get(selectorsList.editHeroButton).eq(1).click()
        cy.get(selectorsList.editName).clear().type(userData.newName)
        cy.get(selectorsList.editPrice).clear().type(userData.newPrice)
        cy.get(selectorsList.editFans).clear().type(userData.newFans)
        cy.get(selectorsList.editSaves).clear().type(userData.newSaves)
        cy.get(selectorsList.boxEdit).select('2');
        cy.get(selectorsList.selectImage).selectFile(userData.imageCapitain)
        cy.get(selectorsList.submitButton).eq(1).click()

        // CHECK RETURN TO HOME PAGE
        cy.contains(userData.checkLogin)
    })  


/////////////////////////////////////////////////////////////////////////////////////////////////


    it('New Hero And Check The Return To Home', () => {
        
        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.wait(500)

        // NEW HERO
        cy.get(selectorsList.newHeroButton).click()
        cy.get(selectorsList.nameNewHero).type(userData.nameNewHero)
        cy.get(selectorsList.priceNewHero).type(userData.priceNewHero)
        cy.get(selectorsList.fansNewHero).type(userData.fansNewHero)
        cy.get(selectorsList.savesNewHero).type(userData.savesNewHero)
        cy.get(selectorsList.boxEdit).select('2')
        cy.get(selectorsList.selectImage).selectFile(userData.imageGhost)
        cy.get(selectorsList.submitButton).eq(1).click()

        // CHECK RETURN TO HOME PAGE
        cy.contains(userData.checkLogin)
    })  

/////////////////////////////////////////////////////////////////////////////////////////////////


    it('Delete Hero', () => {

        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.wait(500)

        // VERIFY NUMBER OF CARDS - BEFORE 
        let initialCount;
        cy.get(selectorsList.cardsHero).its('length').then((count) => {
        initialCount = count;
        cy.log(`initialCount: ${initialCount}`)
        })

        // DELETE
        cy.get(selectorsList.deleteButton).eq(6).click();
        cy.get(selectorsList.confirmDeleteButton).click();
        cy.wait(500)

        // VERIFY NUMBER OF CARDS - AFTER 
        cy.get(selectorsList.cardsHero).its('length').then((newCount) => {
        cy.log(`newCount: ${newCount}`)
        expect(newCount).to.not.equal(initialCount)
        })
    })  


/////////////////////////////////////////////////////////////////////////////////////////////////


    it('Decline Delete Hero', () => {

        // LOGIN
        cy.visit(BASE_URL)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.emailLoginField).type(userData.loginEmailAdmin)
        cy.get(selectorsList.passwordLoginField).type(userData.loginPassword)
        cy.get(selectorsList.signInButton).click()
        cy.wait(500)

        // VERIFY NUMBER OF CARDS - BEFORE 
        let initialCount;
        cy.get(selectorsList.cardsHero).its('length').then((count) => {
        initialCount = count;
        cy.log(`initialCount: ${initialCount}`)
        })

        // DECLINE DELETE
        cy.get(selectorsList.deleteButton).eq(6).click()
        cy.get(selectorsList.declineDeleteButton).click()
        cy.wait(500)

        // VERIFY NUMBER OF CARDS - AFTER 
        cy.get(selectorsList.cardsHero).its('length').then((newCount) => {
        cy.log(`newCount: ${newCount}`)
        expect(newCount).to.equal(initialCount)
        })
    })  


})