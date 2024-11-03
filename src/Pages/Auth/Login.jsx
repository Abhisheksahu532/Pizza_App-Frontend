import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/AuthSlice";
import LoginPresentation from "./LoginPresentation";
import { useNavigate } from "react-router-dom";
function Login() {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",

  });

  function handleUserInput(e){
    const {name, value} = e.target;
    setLoginData({
        ...loginData,
        [name]: value
    })
}

    async function handleFormSubmit(e){
        e.preventDefault();
        console.log(loginData)

        //Add validations for the form inputs
        if(!loginData.email || !loginData.password){
            toast.error("Missing values from the form")
            return;
        }

        //check email
        if(!loginData.email.includes('@') || !loginData.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }

        const apiResponse = await dispatch(login(loginData));
        console.log("ApiResponse is ",apiResponse)
        console.log("API Response Data:", apiResponse.payload);
        if(apiResponse.payload.data.success){
            toast.success("Login successful!");
            console.log("Navigating to home page...")
            navigate("/");
        }
  
    }
    return (
        <LoginPresentation
            handleFormSubmit={handleFormSubmit}
            handleUserInput={handleUserInput}
            />
        )
  
}

export default Login;