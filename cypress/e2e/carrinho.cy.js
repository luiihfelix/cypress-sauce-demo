import Login from "../pages/login"
import Inventario from "../pages/inventory"
import Carrinho from "../pages/cart"
import CheckoutOne from "../pages/checkout-one"
import CheckoutComplete from "../pages/checkout-complete"

describe('Carrinho', () => {

    beforeEach(() => {
        // Arrange
        Login.visitarPagina()
        Login.loginValido()
    })

    it('Adicionar 4 produtos ao carrinho com sucesso', () => {

        // 1st Act
        Inventario.adicionarBackpack()
        Inventario.adicionarShirtRed()
        Inventario.adicionarShirtBolt()
        Inventario.clicarCarrinho()
        Carrinho.clicarBotaoContinueShopping()
        Inventario.adicionarJacket()
        Inventario.removerShirtRed()
        Inventario.clicarCarrinho()
        Carrinho.removerJacket()

        // 1st Assert
        Carrinho.verificarCartBadge('2')
        Carrinho.verificarBackpackCarrinho()
        Carrinho.verificarShirtBoltCarrinho()

        cy.screenshot('2 produtos no carrinho')

        // 2nd Act
        Carrinho.clicarBotaoCheckout()
        CheckoutOne.preencherNomeSobrenomePostalCode('John', 'Doe', '01246-001')
        CheckoutOne.clicarBotaoContinue()
        cy.get('[id="finish"]').click()

        // 2nd Assert
        CheckoutComplete.verificarMensagemCheckout()
        CheckoutComplete.verificarUrl('https://www.saucedemo.com/checkout-complete.html')

        cy.screenshot('compra finalizada')

    })
})