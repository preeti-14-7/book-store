import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link ,useNavigate } from "react-router-dom"


function SignUp()
{

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate ()
  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError('')
      setLoading(true)
       await signup(emailRef.current.value, passwordRef.current.value)
       navigate('/')
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
    return(
      <form onSubmit={handleSubmit}  >
        <div className="top ">
        <h2 className="mt-1 mb-5">Sign Up</h2>
    
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-4">
          {error && <div variant="danger">{error}</div>}
            
      
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  ref={emailRef} 
                  required =""
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="form-control"
                  ref={passwordRef}
                  required =""
                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password-confirm"
                  placeholder="Confirm-Password"
                  className="form-control"
                  ref={passwordConfirmRef}
                  required =""
                />
              </div>
              <div className="row d-flex gap-2">
                <button className="close-btn btn btn-block mb-4 col-lg-12" type="submit" disabled={loading}>submit</button>
                <p className="line-text">Already have an account <Link to = "/">LogIn</Link></p>      
              </div>
          </div>
        </div>
      </div>
       </form>
    );
};

export default SignUp;