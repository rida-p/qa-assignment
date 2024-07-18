class ForBusinessPlans {
    get smallTeams(): PlanDetails {
        return {
            planName: cy.get(':nth-child(1) > .sc-ece40699-1 > .dbVyeJ > .gDztgA > [data-cy="box"] > [data-cy="flexbox"] > .hPRUSs'),
            price: cy.get('.gjcrNM'),
            button: cy.get('[data-cy="ga-direct-checkout-btn-smallteams-yearly"]')
        }
    }
    get enterPrise(): PlanDetails {
        return {
            planName: cy.get(':nth-child(2) > .sc-ece40699-1 > .dbVyeJ > :nth-child(1) > [data-cy="box"] > [data-cy="flexbox"] > .hPRUSs'),
            price: cy.get(':nth-child(2) > .sc-ece40699-1 > .dbVyeJ > .gWmHSc > [data-cy="box"] > [data-cy="flex-item"] > .eWvCXS'),
            button: cy.get('[data-cy="ga-contact-sales"]')
        }
    }
    get vilt(): PlanDetails {
        return {
            planName: cy.get('.kuSRcl > .sc-ece40699-1 > .dbVyeJ > :nth-child(1) > [data-cy="box"] > [data-cy="flexbox"] > .hPRUSs'),
            price: cy.get('.kuSRcl > .sc-ece40699-1 > .dbVyeJ > .gWmHSc > [data-cy="box"] > [data-cy="flex-item"] > .eWvCXS'),
            button: cy.get('[data-cy="ga-VILT-contact-sales"]')
        }
    }
}

class ForIndividualsPlans {
    get montly(): PlanDetails {
        return {
            planName: cy.get(':nth-child(1) > .sc-ece40699-1 > .dbVyeJ > .gDztgA > [data-cy="box"] > [data-cy="flexbox"] > .hPRUSs'),
            price: cy.get('[data-cy="box"] > .cgxzLU > .gjcrNM'),
            freeTrialButton: cy.get('[data-cy="ga-trial-checkout-btn"]'),
            buyNowButton: cy.get('[data-cy="ga-direct-checkout-btn"]')
        }
    }
    get yearly(): PlanDetails {
        return {
            planName: cy.get(':nth-child(2) > .sc-ece40699-1 > .dbVyeJ > .gDztgA > [data-cy="box"] > [data-cy="flexbox"] > .hPRUSs'),
            price: cy.get('.lpjtWg > [data-cy="flexbox"] > .gjcrNM'),
            freeTrialButton: cy.get('[data-cy="ga-trial-checkout-btn-yearly"]'),
            buyNowButton: cy.get('[data-cy="ga-direct-checkout-btn-yearly"]')
        }
    }
}

export class PricingPage {
    static forBusiness = new ForBusinessPlans()
    static forIndividuals = new ForIndividualsPlans()
    static get forBusinessButton() {
        return cy.get('[aria-describedby="1"] > .sc-50705d1f-0 > [data-cy="text"]')
    }
    static get forIndividualsButton() {
        return cy.get('[aria-describedby="2"] > .sc-50705d1f-0 > [data-cy="text"]')
    }
}

type PlanDetails = {
    planName: Cypress.Chainable
    price: Cypress.Chainable
    button?: Cypress.Chainable
    freeTrialButton?: Cypress.Chainable
    buyNowButton?: Cypress.Chainable
}
