import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import './Forget.css'
function Forget()
{
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await firebase.auth().sendPasswordResetEmail(email);
        setSuccess(true);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    return(
        <div className="row justify-content-center align-items-center">
           
             <div className="form-outline col-md-4">
                 
                    <input type="email" name="title" className="form-control"
                      placeholder="Enter Your Mail id" value={email} onChange={handleEmailChange} />
                      <button className="close-btn btn btn-block mt-2" type='submit' onClick={handleSubmit}>Submit</button>
                      <button className="close-btn btn btn-block mt-2" ><Link to='/'>Log In</Link></button>
                      {error && <p>{error}</p>}
      {success && <p>Reset email sent. Please check your email.</p>}
    
             
             
             </div>
             
             
        </div>
    );

};

export default Forget;