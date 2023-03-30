
import React, { useRef, useState } from "react"
import "./LogIn.css";
import { useAuth } from "../contexts/AuthContext"
import { Link ,useNavigate } from "react-router-dom"
import firebase from 'firebase/compat/app';

function LogIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
 

  const signInWithGoogle = async () => {
    console.log("enter")
    const provider = new firebase.auth.GoogleAuthProvider();
   
    try {
      await firebase.auth().signInWithPopup(provider);
        console.log("enter")
         navigate('/home');
      
    } catch (error) {
      setError(error.message);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
    
      navigate('/home')
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  
  return (
    <div className="top ">
      <h2 className="mt-1 mb-5">LogIn to continue</h2>
      {error && <div variant="danger">{error}</div>}
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-4">

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                ref={emailRef}
              />

            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
                ref={passwordRef}
              />


            </div>
           
              <button className="close-btn btn btn-block mb-4 col-lg-12" type="submit" >submit</button>
              <Link to="/forgot-password">Forgot Password?</Link>
              <p className="line-text">Don't have an account? <Link to = "/signup">Signup instead</Link></p>
              <p className="text-center"> OR</p>
          </form>
          <button className=" close-btn btn btn-block mb-4 col-lg-12" type = 'submit' onClick={signInWithGoogle}>continue with Google</button>

        </div>
      </div>
    </div>
  );
}

export default LogIn;