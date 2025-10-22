import { elements as el } from "./elements";

class CheckoutComplete {
    verificarMensagemCheckout() {
        cy.get(el.completeMessage).should(
            'contain.text',
            'Thank you for your order!'
        )
    }

    verificarUrl(url) {
        cy.url().should('eq', url)
    }

}

export default new CheckoutComplete()