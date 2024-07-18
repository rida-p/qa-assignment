export class Navigation {
    private static baseUrl = 'https://cloudacademy.com'
    static get pricing() {
        return `${this.baseUrl}/pricing`
    }
    static search(searchText: string) {
        return `${this.baseUrl}/search/?q=${searchText}`
    }
}