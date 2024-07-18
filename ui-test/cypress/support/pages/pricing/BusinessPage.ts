import { PlanDetails } from "./types/PlanDetails"

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