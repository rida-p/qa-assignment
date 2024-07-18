export class CoursesSearchResultPage {
    static get searchResultCards() {
        return cy.get('[data-cy^="entity-card-lp-"]')
    }
}