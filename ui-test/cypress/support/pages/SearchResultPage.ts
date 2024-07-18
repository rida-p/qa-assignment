export class SearchResultPage {

    static get searchResultCards() {
        return cy.get('[data-cy^="entity-card-lp-"]')
    }
    
}