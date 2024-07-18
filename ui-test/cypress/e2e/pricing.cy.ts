import { Navigation } from "../support/navigation"
import { PricingPage } from "../support/pages/pricing/PricingPage"
import { getRidOfCookieMessage } from "../support/shortcuts/getRidOfCookieMessage"

describe('Verify Pricing', () => {
  it('should assert business pricing plans', () => {
    cy.visit(Navigation.pricing)
    getRidOfCookieMessage()
    PricingPage.forBusiness.smallTeams.planName.should('be.be.visible')
    PricingPage.forBusiness.smallTeams.price.should('be.be.visible')
    PricingPage.forBusiness.smallTeams.button.should('be.be.visible')

    PricingPage.forBusiness.enterPrise.planName.should('be.be.visible')
    PricingPage.forBusiness.enterPrise.price.should('be.be.visible')
    PricingPage.forBusiness.enterPrise.button.should('be.be.visible')

    PricingPage.forBusiness.vilt.planName.should('be.be.visible')
    PricingPage.forBusiness.vilt.price.should('be.be.visible')
    PricingPage.forBusiness.vilt.button.should('be.be.visible')
  })

  it('should assert Indiviual pricing plans', () => {
    cy.visit(Navigation.pricing)
    getRidOfCookieMessage()
    PricingPage.forIndividualsButton.click()

    PricingPage.forIndividuals.montly.planName.should('be.be.visible')
    PricingPage.forIndividuals.montly.price.should('be.be.visible')
    PricingPage.forIndividuals.montly.freeTrialButton.should('be.be.visible')
    PricingPage.forIndividuals.montly.buyNowButton.should('be.be.visible')

    PricingPage.forIndividuals.yearly.planName.should('be.be.visible')
    PricingPage.forIndividuals.yearly.price.should('be.be.visible')
    PricingPage.forIndividuals.yearly.freeTrialButton.should('be.be.visible')
    PricingPage.forIndividuals.yearly.buyNowButton.should('be.be.visible')
  })

  it.skip('should validate the small teams pricing plan inputs', () => {
    /*
      Need to be logged in - not possible in this assesment
    */
  })
})