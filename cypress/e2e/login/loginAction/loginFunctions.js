import home from '../loginPage/tela_home';
import login from '../loginPage/tela_login';

function realizaAcessoPagina(){
    // Acessar a página inicial
    cy.visit('https://webserver-pg-uat.lfr.cloud/home')
    // Verificar se o título está visível e contém o texto 'DESCUBRA'
    cy.get(home.HOME_TELA.TITULO).should('be.visible').and('contain', 'DESCUBRA')
}

function retirarBannerCookie() {
    cy.get(home.HOME_COOKIES.COOKIES).should('be.visible')
    cy.get(home.HOME_COOKIES.BTN_FECHAR_COOKIES).should('be.visible').click()
}

function realizarLogin(email, senha) {
    cy.get(login.LOGIN.EMAIL).type(email)
    cy.get(login.LOGIN.SENHA).type(senha)
    cy.get(login.LOGIN.BTN_ENTRAR).click()
}

export default {
    realizaAcessoPagina,
    retirarBannerCookie,
    realizarLogin
};
