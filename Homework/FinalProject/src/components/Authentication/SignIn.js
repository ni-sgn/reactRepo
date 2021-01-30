import {signInWithGoogle} from "../../context"
import React , { useContext,useState } from 'react'
import {UserContext} from '../../providers/UserProvider'

export default function SignIn()
{
    const user = useContext(UserContext)
    const [redirect, setRedirect] = useState(null)

    return(
        <>
        <div>
            <h1>SignIn</h1>
            <button onClick={() => {
                try {
                  signInWithGoogle();
                  console.log(user)
                } catch (error) {
                  console.error("Error signing in with Google", error);
                }
            }}>

            <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"/>
            <span> Sign in with Google </span>
            </button>
        </div>
        </>
    )
}