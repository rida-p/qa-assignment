import { ForBusinessPlans } from "./BusinessPage"
import { ForIndividualsPlans } from "./individuals"

/*
    Note on the selectors in this page:
    Ideally these selectors would be more robust and be in this format almost universally:
    ```
        cy.get('[data-cy="unique_identifier"]')
    ```
    While trying different ways to create more robust selectors, finally went with
    proposals from cypress itself
*/
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