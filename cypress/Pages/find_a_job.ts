export class FindAJob{
    navigate(){
        cy.visit('https://pace.africa/')

    }
    clickFindAJob(){
        cy.get(':nth-child(4) > a > .mb-0').click()

    }
    enterFrontendDeveloper(){
        cy.get('.mr-md-3 > .flex-grow-1').type('backend developer{enter}')

    }
    clickJobCard(){
        cy.get(':nth-child(1) > .job-card').click()


    }






}