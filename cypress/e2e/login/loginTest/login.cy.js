/// <reference types="Cypress"/>

import loginFunctions from '../loginAction/loginFunctions';
import home from '../loginPage/tela_home';

describe('Teste Funcional de Login com sucesso', () => {

    before('Realiza o acessp padrão a pagina web', () => {
        //realiza o acesso padrão a pagina web
        loginFunctions.realizaAcessoPagina();
    })
    it('valida o botão de cookie', () => {
        // Retirar o banner de cookie
        loginFunctions.retirarBannerCookie();
    })
    it('Entra no modal de participe', () => {
        // Clicar no botão 'Participe'
        cy.get(home.HOME_TELA.BTN_PARTICIPE).click()
    })
    it('Realiza o login', () => {
        // Clicar no link 'Login'
        cy.get(home.HOME_TELA.LINK_LOGIN).click()

        // Realizar o login com email e senha específicos
        loginFunctions.realizarLogin("handrade-dpg11@vertigo.com.br", "H-s123456");
    })
})

