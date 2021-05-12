import {FindAJob} from "../Pages/find_a_job";

const findAJob = new FindAJob()

it('Find a Job Test', function(){
    findAJob.navigate();
    findAJob.clickFindAJob();
    findAJob.enterFrontendDeveloper();
    findAJob.clickJobCard();

})