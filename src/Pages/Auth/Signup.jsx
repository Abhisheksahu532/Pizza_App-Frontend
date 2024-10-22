import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from './SignupPresentation'

//Conatainer for the Signup component
function Signup() {

    const [signUpState, setSignUpState] = useState({
        firstName: "",
        email: "",
        mobileNumber: "",
        password: "",
    });

    function handleUserInput(e){
        const {name, value} = e.target;
        setSignUpState({
            ...signUpState,
            [name]: value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(signUpState)

        //Add validations for the form inputs
        if(!signUpState.firstName || !signUpState.email || !signUpState.mobileNumber || !signUpState.password){
            toast.error("Missing values from the form")
            return;
        }

        if(signUpState.firstName.length <5){
            toast.error("First name must be at least 5 characters long")
            return;
        }

        //check email
        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }

        //check mobile number length must be 10 digits
        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length >12){
            toast.error("Mobile number must be 10-12 digits long")
            return;
        }

    }


    return (
        <SignupPresentation
        handleFormSubmit={handleFormSubmit}
        handleUserInput={handleUserInput}
        />

    )
}

export default Signup;