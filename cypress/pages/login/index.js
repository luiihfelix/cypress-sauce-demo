import { elements as el } from "./elements"

class Login {
    visitarPagina() {
        cy.visit('https://www.saucedemo.com/')
    }

    loginValido() {
        cy.get(el.user).type('standard_user')
        cy.get(el.pass).type('secret_sauce')
        cy.get(el.loginButton).click()
    }

    validarLoginValido() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('login com sucesso')
    }

    loginInvalido() {
        cy.get(el.user).type('usuario_invalido')
        cy.get(el.pass).type('senha_errada')
        cy.get(el.loginButton).click()
    }

    validarErroLoginInvalido() {
        cy.get(el.errorMessage).should(
            'contain.text',
            'Username and password do not match any user in this service'
        )
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('login invalido')
    }
}

export default new Login() 