import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const Register = () => {
    const [success, setSuccess] = useState("");
    const [registerError, setRegisterError] = useState("");

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // reset success & error
        setSuccess("");
        setRegisterError("");

        createUserWithEmailAndPassword(auth, email, password)
        .then(request => {
            console.log(request.user)
            setSuccess("User Create Successfully")
        })
        .catch(error => {
            console.error(error)
            setRegisterError(error.message)
        })
    }
    return (
        <div className="border">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 px-4 py-2 w-3/4" type="email" name="email" placeholder="Email Address" required id="e" />
                    <br />
                    <input className="mb-4 px-4 py-2 w-3/4" type="password" name="password" placeholder="Password" required id="p" />
                    <br />
                    <input className="mb-4 w-3/4 btn btn-primary" type="submit" value="Register" />
                </form>
                {
                    success && <p className="text-green-700">{success}</p>
                }
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
            </div>
        </div>
    );
};

export default Register;