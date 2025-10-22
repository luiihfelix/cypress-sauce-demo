import { elements as el } from "./elements";

class Inventario {
    adicionarBackpack() {
        cy.get(el.addBackpack).click()
    }

    adicionarShirtRed() {
        cy.get(el.addShirtRed).click()
    }

    adicionarShirtBolt() {
        cy.get(el.addShirtBolt).click()
    }

    adicionarJacket() {
        cy.get(el.addJacket).click()
    }

    clicarCarrinho() {
        cy.get(el.cart).click()
    }

    removerShirtRed() {
        cy.get(el.removeShirtRed).click()
    }
}

export default new Inventario()