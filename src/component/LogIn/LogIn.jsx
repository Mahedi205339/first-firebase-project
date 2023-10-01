import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const LogIn = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logInUser = result.user;
                setUser(logInUser)
                console.log(logInUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })

    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth ,githubProvider)
        .then(result => {
            const logInUser =result.user ;
            setUser(logInUser)
            console.log(logInUser)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
                console.log(result)
                
            })
            .catch(error => {
                console.log(error)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>Sign out</button>
                    :
                    <div>
                         <button onClick={handleGoogleSignIn}>Google log</button>
                         <button onClick={handleGithubSignIn}>GitHub Login</button>
                    </div>

            }
            {user && <div>
                <h3>  User : {user?.displayName}</h3>
                <p>{user.email}</p>
                <img style={{ borderRadius: "50px" }} src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default LogIn;