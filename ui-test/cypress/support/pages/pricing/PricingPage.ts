import { ForBusinessPlans } from "./BusinessPage"
import { ForIndividualsPlans } from "./individuals"

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