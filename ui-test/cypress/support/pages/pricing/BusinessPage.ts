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
export class ForBusinessPlans {
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