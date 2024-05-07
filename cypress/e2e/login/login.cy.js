/// <reference types="Cypress"/>

describe('Teste Funcional de Login com sucesso', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://webserver-pg-uat.lfr.cloud/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.signup-cta').click()
        cy.get('.text-underline').click()
        cy.get('#_com_pg_descubrapg_consumerlogin_portlet_ConsumerLoginPortlet_email').type("handrade-dpg11@vertigo.com.br")
        cy.get('#_com_pg_descubrapg_consumerlogin_portlet_ConsumerLoginPortlet_password').type("H-s123456")
        cy.get('.peg__register-form-submit').click()
    });

    it('Validando login com usuario incorreto', () => {
        cy.visit("https://webserver-pg-uat.lfr.cloud/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.signup-cta').click()
        cy.get('.text-underline').click()
        cy.get('#_com_pg_descubrapg_consumerlogin_portlet_ConsumerLoginPortlet_email').type("loginIncoreto@com.br")
        cy.get('#_com_pg_descubrapg_consumerlogin_portlet_ConsumerLoginPortlet_password').type("H-s123456")
        cy.get('.peg__register-form-submit').click()
        cy.get('body').should('contain', 'Erro:').should('be.visible')
    });

    it('Validando com senha incorreta', () => {
        cy.visit("https://webserver-pg-uat.lfr.cloud/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.signup-cta').click()
        cy.get('.text-underline').click()
        cy.get('#_com_pg_descubrapg_consumerlogin_portlet_ConsumerLoginPortlet_email').type("handrade-dpg11@vertigo.com.br")
        cy.get('#_com_pg_descubrapg_consumerlogin_portlet_ConsumerLoginPortlet_password').type("senhaIncorreta")
        cy.get('.peg__register-form-submit').click()
        cy.get('body').should('contain', 'Erro:').should('be.visible')
    });
});