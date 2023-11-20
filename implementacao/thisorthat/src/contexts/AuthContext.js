import React, { useContext, useEffect, useState } from "react"
import { useCreateUserWithEmailAndPassword, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const [
        createUserWithEmailAndPassword,
    ] = useCreateUserWithEmailAndPassword(auth)

    const [
        signOut,
    ] = useSignOut(auth)

    function signup (email, password){
        return createUserWithEmailAndPassword(email, password)
    }

    function logout(){
        signOut()
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}