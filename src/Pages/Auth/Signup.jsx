import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from './SignupPresentation'
import { useDispatch } from "react-redux";
import { createAccount } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

//Conatainer for the Signup component
function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

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

    async function handleFormSubmit(e){
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

        const apiResponse = await dispatch(createAccount(signUpState));
        console.log("ApiResponse is ",apiResponse)
        console.log("API Response Data:", apiResponse.payload);
        if (apiResponse.payload.data.response) {
            toast.success("Signup successful!");
            console.log("Navigating to login page...");
            navigate("/auth/login");
        } else {
            toast.error("Signup failed. Please try again.");
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