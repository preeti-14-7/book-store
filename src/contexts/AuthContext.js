import React, { useContext, useState, useEffect } from "react"
import 'firebase/compat/auth';
import 'firebase/firestore';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';


const AuthContext = React.createContext()


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email,password)
  }
 

  function login(email, password) {
   // console.log("enterd")
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
      console.log("enterd")
    return auth.signOut();
  }

  function resetPassword(email) {
    return firebase.auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return firebase.auth.currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return firebase.auth.currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}