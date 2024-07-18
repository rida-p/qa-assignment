export function getRidOfCookieMessage() {
    cy.get('a[id="CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"]').click()
}