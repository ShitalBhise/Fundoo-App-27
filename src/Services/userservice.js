import axios from "axios";
export const SignUp = (Signupobj) =>{
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",SignUpobj)
return response;

}
