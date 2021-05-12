import {SigninPage} from "../Pages/signin_page";

const signinPage = new SigninPage()

it('Sign in Test', function(){

    signinPage.navigate('https://pace.africa/');
    signinPage.clickSignIn();
    signinPage.enterUsername('rufus.abioritsegbemi@gmail.com');
    signinPage.enterPassword('Lajutex123@');
    signinPage.clickSignin();
    


})