import React from 'react';
import './signuppage.css';
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import img from '../Signup/account (1).svg';

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;

function Signuppage() {
    const [regexObj, setRegexObj] = React.useState({
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: "",
    });
    const [signupObj, setSignupObj] = React.useState({ firstname: "", lastname: "",username: "" , password: "" , confirm: " "});


    const takeFirstname = (event) => {
        setSignupObj((prevState) => ({ ...prevState, firstname: event.target.value }));
      };
    
      const takeLastname = (event) => {
        setSignupObj((prevState) => ({
          ...prevState,
          lastname: event.target.value,
        }));
      };
      const takeUsername = (event) => {
        setSignupObj((prevState) => ({...prevState,username:event.target.value}));
      };

      const takePassword = (event) => {
        setSignupObj((prevState) => ({
          ...prevState,
          password: event.target.value,
        }));

        const takeConfirm = (event) => {
            setSignupObj((prevState) => ({ ...prevState, confirm: event.target.value }));
        }
      };

      const submit = () => {
        let firstnameTest = firstNameRegex.test(signupObj.firstname);
        let lastnameTest = lastNameRegex.test(signupObj.lastname);
        let usernameTest = emailRegex.test(signupObj.username);
        let passwordTest = passwordRegex.test(signupObj.password);
        let confirmTest = confirmRegex.test(signupObj.confirm);


        if (firstnameTest === false) {
          setRegexObj((prevState) => ({
            ...prevState,
            firstnameBorder: true,
            firstnameHelper: "enter valid firstname",
          }));
        } else if (firstnameTest === true) {
          setRegexObj((prevState) => ({
            ...prevState,
            firstnameBorder: false,
            firstnameHelper: "",
          }));
        }
        if (lastnameTest === false) {
          setRegexObj((prevState) => ({
            ...prevState,
            lastnameBorder: true,
            lastnameHelper: "enter valid lastname",
          }));
        } else if (lastnameTest === true) {
          setRegexObj((prevState) => ({
            ...prevState,
            lastnameBorder: false,
            lastnameHelper: "",
          }));
        }

        if (usernameTest === false) {
            setRegexObj((prevState) => ({
              ...prevState,
              usernameBorder: true,
              usernameHelper: "Choose a Gmail address",
            }));
          } else if (usernameTest === true) {
            setRegexObj((prevState) => ({
              ...prevState,
              usernameBorder: false,
              usernameHelper: "",
            }));
          }
      

      if (passwordTest === false) {
        setRegexObj((prevState) => ({
          ...prevState,
          passwordBorder: true,
          passwordHelper: "Enter a password",
        }));
      } else if (passwordTest === true) {
        setRegexObj((prevState) => ({
          ...prevState,
          passwordBorder: false,
          passwordHelper: "",
        }));
      }



    //   if (confirmTest === false) {
    //     setRegexObj((prevState) => ({
    //       ...prevState,
    //       confirmBorder: true,
    //       confirmHelper: "confirm a password",
    //     }));
    //   } else if (confirmTest === true) {
    //     setRegexObj((prevState) => ({
    //       ...prevState,
    //       confirmBorder: false,
    //       confirmHelper: "",
    //     }));
    //   }





    //   else if (signUpObj.confirmPassword === "") {
    //     setRegexObj((prevState) => ({ ...prevState, pwdBorder: true, pwdHelper: "Confirm your password" }))
    // }
    // else if (signUpObj.confirmPassword !== signUpObj.password) {
    //     setRegexObj((prevState) => ({
    //         ...prevState, pwdBorder: true,
    //         pwdHelper: "Those passwords didn't match. Try again."
    //     }))
    // }
    };

    return (
        <div className='outer-box'>

            <div className='Left-box'>

                <div className='details'>

                    <div className='logo'>

                    <h2> <span style={{ color: "#4285f4", fontsize: "25px" }}>G</span>
                    <span style={{ color: "#FF0000", fontsize: "25px" }}>o</span>
                    <span style={{ color: "#f4b400", fontsize: "25px" }}>o</span>
                    <span style={{ color: "#4285f4", fontsize: "25px" }}>g</span>
                    <span style={{ color: "#0f9d58", fontsize: "25px" }}>l</span>
                    <span style={{ color: "#FF0000", fontsize: "25px" }}>e</span></h2>

                    </div>

                    <div className='heading'>

                        <h1>Create Your Google Account</h1>

                    </div>

                    <div className='content'>

                        <form className='signup_form' action="#" method='post'>

                            <div className='Fields'>

                                <div className='fieldone'>


                                <TextField onChange={takeFirstname} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper}
                                        className="textfield" id="firstname" label="First name" variant="outlined" type='text' size='small' />



                                {/* <TextField 
                id="outlined-basic"
                error={regexObj.firstnameBorder}
                label="First name"
                variant="outlined"
                onChange={takefirstName}
                helperText={regexObj.firstnameHelper}
                size='small'
                /> */}
                
                                </div>

                                <div className='fieldtwo'>

                                <TextField onChange={takeLastname} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper}
                                        className="textfield" id="lastname" label="Last name" variant="outlined" type='text' size='small' />

                                </div>

                            </div>

                            <div className="email">

                            <TextField onChange={takeUsername} error={regexObj.emailBorder} helperText={regexObj.emailHelper}
                                    className="textfield" id="email" label="Username" variant="outlined" type='email' size='small' fullWidth />

                            
 <div className="suggest">You can use letters, numbers & periods</div>

                            </div>

                            <div className="currentemail">

                                <Button className="textbutton">Use my current email address instead</Button>

                            </div>

                            <div className="password">

                                <div className='Fields'>

                                    <div className="fieldone">

                                    <TextField onChange={takePassword} error={regexObj.pwdBorder} helperText={regexObj.pwdHelper}
                                            className="textfield" id="pwd" label="Password" variant="outlined" type='password' size='small' />

                                    </div>

                                    <div className='fieldtwo'>

                                    {/* <TextField onChange={takeConfirm} error={regexObj.confirmPwdBorder} helperText={regexObj.confirmPwdHelper}
                                            className="textfield" id="confirm" label="Confirm" variant="outlined" type='password' size='small' /> */}

                                    </div>

                                </div>

                                <div className="suggest">Use 8 or more characters with a mix of letters, numbers & symbols</div>

                                <div>

                                    <FormControlLabel control={<Checkbox />} label="Show password"/>

                                </div>

                            </div>

                        </form>

                        <div className='links'>

                        <Button className='textbutton' >Sign in instead</Button>

                            <Button  onclick={submit} className='containedbutton' variant='contained'>Next</Button>

                        </div>

                    </div>

                </div>

                <div className='account-image'>

                    <figure className='figure'>

                        <img src={img} alt="account" width="244px" height="244px" />

                        <figcaption>One account. All of Google working for you.</figcaption>

                    </figure>

                </div>

            </div>

        </div>
    )
}

export default Signuppage;









