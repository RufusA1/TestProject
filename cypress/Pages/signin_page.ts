export class SigninPage{

    navigate(url: string){
        cy.visit(url)

    }
    clickSignIn(){
        cy.get(':nth-child(2) > a > .mb-0').click()

    }
    enterUsername(username: string){
        cy.get(':nth-child(3) > .form-control').type(username)

    }
    enterPassword(password: string){
        cy.get(':nth-child(4) > .form-control').type(password)

    }
    clickSignin(){
        cy.get('.btn').click()

    }
}