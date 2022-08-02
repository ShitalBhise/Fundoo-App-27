import React from 'react';
import './signpage.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Signin() {
    
    return (
        <div className='signin_outerbox'>

            <div className="signin_innerbox">

                <div className="signin_logo">

                <h2> <span style={{ color: "#4285f4", fontsize: "20px" }}>G</span>
                    <span style={{ color: "#FF0000", fontsize: "20px" }}>o</span>
                    <span style={{ color: "#f4b400", fontsize: "20px" }}>o</span>
                    <span style={{ color: "#4285f4", fontsize: "20px" }}>g</span>
                    <span style={{ color: "#0f9d58", fontsize: "20px" }}>l</span>
                    <span style={{ color: "#FF0000", fontsize: "20px" }}>e</span></h2>

                </div>

                <div className="signin_heading">

                    <h1>Sign in</h1>

                    <div className='signin_sub-heading'>Use your Google Account</div>

                </div>

                <div className="signin_container">

                    <form method='post'>

                        <div className='signin_email'>

                        <TextField id="outlined-basic" label="Email or phone" variant="outlined" size="small" fullWidth/>
                        </div>

                        <div className='signin_link'>

                            <Button size="small">Forgot email?</Button>

                        </div>

                        <div className='signin_password'>

                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth/>
                        </div>

                        <div className='signin_link'>

                            <Button size="small">Forgot password?</Button>

                        </div>

                    </form>

                    <div className="signin_guestmode">

                        <div className="signin_guest">

                            <span>Not your computer? Use Guest mode to sign in privately. </span>

                            <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB" jsname="guestlink">Learn more</a>

                        </div>

                    </div>

                    <div className="signin_clickme">

                        <div className='signin_textbutton'>

                        <h5><a href="" class="line2">Create Account</a></h5>

                        </div>

                        <div className='signin_containedbutton'>

                            <Button variant="contained" size="small">
        Next
      </Button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Signin;