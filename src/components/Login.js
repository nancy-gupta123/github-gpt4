import Header from "./Header"
import { useState } from "react";
const Login = () => {
const [isSinIn,setisSignIn]=useState(true);

const toggleSignInForm=()=>{
    setisSignIn(!isSinIn);
}

  return (
    <div >
        <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"alt="bg"/>
    </div>
    <form className="absolute p-7 py-4 bg-black w-3/12 mx-auto left-0 right-0 my-36 text-white rounded-md bg-opacity-90">
    <h1 className="font-bold text-4xl py-4 ">{isSinIn?"Sign In":"Sign Up"}</h1>
    {!isSinIn && <input type="text" 
        placeholder="Full Name"
        className="p-4 my-4 w-full bg-zinc-800"/>}
        <input type="text" 
        placeholder="Email Address"
        className="p-4 my-4 w-full bg-zinc-800"/>
        
        <input type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-zinc-800"/>
        <button 
        className="p-4 my-6 bg-red-700 w-full">
         {isSinIn?"Sign In":"Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSinIn?"New to Netflix? Sign Up Now":"Already registered?Sign In Now "}</p>
    </form>
    </div>
  )
}

export default Login