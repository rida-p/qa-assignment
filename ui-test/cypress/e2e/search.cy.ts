import { Navigation } from "../support/navigation"
import { SearchResultPage } from "../support/pages/SearchResultPage"
import { getRidOfCookieMessage } from "../support/shortcuts/getRidOfCookieMessage"

describe('Show Correct results for Search keyword', () => {

  const searchCriteria = ['aws', 'gcp', 'azure']
  const searchResultAssertionLimit = 4

  searchCriteria.forEach(keyword => {

      it(`should display results for ${keyword}`, () => {
        cy.visit(Navigation.search(keyword))
        getRidOfCookieMessage()

        SearchResultPage.searchResultCards.each(($courseCard, index, $list) => {

          let foundKeyword = 0
          cy.wrap($courseCard).scrollIntoView()

          cy.wrap($courseCard).within(() => {
            if ($courseCard.text().toLowerCase().indexOf(keyword)) {
              foundKeyword++
            }
            assert.isTrue(foundKeyword >= 1)
            console.log($courseCard.text().toLowerCase().indexOf(keyword))
          })
          
          if (index == searchResultAssertionLimit) {
            return
          }
        })
      })
  });
})