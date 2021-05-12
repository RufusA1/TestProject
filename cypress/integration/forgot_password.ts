import {ForgotPassword} from "../Pages/forgot_password";

const forgotPassword = new ForgotPassword()

it('Forgot Password Test', function(){

    forgotPassword.navigate('https://pace.africa/');
    forgotPassword.clickSignIn();
    forgotPassword.clickForgotPassword();
    forgotPassword.enterUsername('rufus.abioritsegbemi@gmail.com');
    forgotPassword.clickSendPasswordResetLink();
    
    


})