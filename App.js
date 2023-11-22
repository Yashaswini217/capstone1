import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput";


const App = () => {
  const [values, setValues] = useState({
    username: "",
    BOD:"",
    PhoneNumber: "",
    Emailid:"",
    Address: "",
    Pincode:"",
    password: "",
    confirmPassword: "",
  });
  

  const inputs = [
    {
      //for user name
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
       
       
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "BOD",
      type: "date",
      placeholder: "DOB",
      
    },
    {
     
      id: 3,
      name: "phone number",
      type: "number",
      placeholder: "Enter Phone Number",
      errorMessage: "It should be a valid phone number! please match with the requirnment",
    
      pattern: "/^{10}$/",
      required: true,
    },
    {
     
      id: 4,
      name: "Email-id",
      type: "Email",
      placeholder: "Enter valid email",
      errorMessage: "please enter the valid address",
     
      pattern: "^[A-Za-z0-9]{3,45}$",
      required: true,
    },
    {
      //validation used for address
      id: 5,
      name: "Address",
      type: "text",
      placeholder: "Enter Address",
      errorMessage: "please enter the valid address",
      pattern: "^[A-Za-z0-9]{3,45}$",
      required: true,
    },
   
    {
      id: 6,
      name: "Pincode",
      type: "number",
      placeholder: "Enter the Pincode",
      errorMessage:
        "Enter a pincode number has only  six digits",
      pattern: "^[A-Za-z0-9]{3,7}$",
      required: true,
    },
    
    {
      id: 7,
      name: "Password",
      type: "password",
      placeholder: "enter valid Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
   
     
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
    
  );
};

export default App;
