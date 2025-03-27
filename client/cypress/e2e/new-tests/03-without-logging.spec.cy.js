describe('Without Logging', () => {

    
    const BASE_URL = 'http://localhost:3000'


    const selectorsList = {
        likeButton: "[data-cy='like']",
        hideHeroButton: "[data-cy='money']",
        errorWindow: '.gap-4',
        okButtonErrorWindow: '.gap-4 > .gap-2 > .undefined',
    }


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


    it('Like Hero', () => {
        cy.visit(BASE_URL)
        cy.get(selectorsList.likeButton).eq(0).click()
        cy.get(selectorsList.errorWindow)
        cy.get(selectorsList.okButtonErrorWindow).click()
    })


/////////////////////////////////////////////////////////////////////////////////////////


    it('Hire a Hero', () => {
        cy.visit(BASE_URL)
        cy.get(selectorsList.hideHeroButton).eq(0).click()
        cy.get(selectorsList.errorWindow)
        cy.get(selectorsList.okButtonErrorWindow).click()
    })


})