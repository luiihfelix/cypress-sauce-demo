import { elements as el } from "./elements";

class Carrinho {
    clicarBotaoContinueShopping() {
        cy.get(el.continueShoppingButton).click()
    }

    removerJacket() {
        cy.get(el.removeJacket).click()
    }

    verificarCartBadge(badgeNumber) {
        cy.get(el.cartBadge).should(
            'contain.text', `${badgeNumber}`
        )
    }

    verificarBackpackCarrinho() {
        cy.get(el.cartBackpack).should(
            'contain.text',
            'Sauce Labs Backpack'
        )
    }

    verificarShirtBoltCarrinho() {
        cy.get(el.cartShirtBolt).should(
            'contain.text',
            'Sauce Labs Bolt T-Shirt'
        )
    }

    clicarBotaoCheckout() {
        cy.get(el.checkoutButton).click()
    }

}

export default new Carrinho()