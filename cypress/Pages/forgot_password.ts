export class ForgotPassword{
    navigate(url: string){
        cy.visit(url)

    }
    clickSignIn(){
        cy.get(':nth-child(2) > a > .mb-0').click()

    }
    clickForgotPassword(){
        cy.get(':nth-child(6) > a').click()

    }
    enterUsername(username: string){
        cy.get('.form-control').type(username)

    }
    clickSendPasswordResetLink(){
        cy.get('.btn').click()
        
    }





}