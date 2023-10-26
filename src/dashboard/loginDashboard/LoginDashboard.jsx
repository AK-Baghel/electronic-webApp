import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

function LoginDashboard() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [check, setCheck] = useState(false);

    return (
        <div className="signUpContainer">
            <div className="signUpHeading">Login</div>

            <input type="email" className="signUpInput" placeholder='Enter Your Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            {check && !email && <p className='validation'>It's mandatory to fill Email</p>}

            <input type="password" className="signUpInput" placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            {check && !password && <p className='validation'>It's mandatory to fill Password</p>}

            <div className="signUpButton" >Login</div>

            {/* <div className="already">Don't have an account? <span className='blue' onClick={() => navigate("/signUp")}>Sign Up</span></div> */}
        </div>
    )
}

export default LoginDashboard