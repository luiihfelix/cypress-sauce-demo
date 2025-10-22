import Login from "../pages/login"

describe('Login', () => {

    beforeEach(() => {
        // Arrange
        Login.visitarPagina()
    })

    it('Login com sucesso', () => {
        // Act
        Login.loginValido()

        // Assert
        Login.validarLoginValido()
    })

    it('Login com credenciais inválidas', () => {
        // Act
        Login.loginInvalido()

        // Assert
        Login.validarErroLoginInvalido()
    })
}) 