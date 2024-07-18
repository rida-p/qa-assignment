import { PlanDetails } from "./types/PlanDetails"

/*
    Note on the selectors in this page:
    Ideally these selectors would be more robust and be in this format almost universally:
    ```
        cy.get('[data-cy="unique_identifier"]')
    ```
    While trying different ways to create more robust selectors, finally went with
    proposals from cypress itself
*/
export class ForIndividualsPlans {
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