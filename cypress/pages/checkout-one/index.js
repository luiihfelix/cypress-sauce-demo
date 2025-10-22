import { elements as el } from "./elements";

class CheckoutOne {
    preencherNomeSobrenomePostalCode(nome, sobrenome, postalCode) {
        cy.get(el.firstNameInput).type(nome)
        cy.get(el.lastNameInput).type(sobrenome)
        cy.get(el.postalCodeInput).type(postalCode)
    }

    clicarBotaoContinue() {
        cy.get(el.continueButton).click()
    }

}

export default new CheckoutOne()