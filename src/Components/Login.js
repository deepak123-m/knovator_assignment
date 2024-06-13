import React,{useState,useContext} from 'react';
import noteContext from "../Context/Notecontext";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [userdetails, setuserdetails] = useState({email:"",password:""})
    let context = useContext(noteContext);
    let navigate = useNavigate()
    const {signup,users} =context;
    console.log(userdetails)
    const handleEmail = (e) => {
        e.preventDefault();
        setuserdetails({...userdetails,email:e.target.value})

    }

    console.log(users)

    const handlePassword = (e) => {
        e.preventDefault();
        setuserdetails({...userdetails,password:e.target.value})
    }

   

    const handleSignup = async(e) => {
     e.preventDefault();
        
        await signup(userdetails.email,userdetails.password);
        if(users === 1)
            {
                navigate("/")

            }
            
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
        </div>
        <form className="mt-8 space-y-6" >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address"  className="sr-only">Email address</label>
              <input onChange={(e)=>(handleEmail(e))} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" onChange={(e)=>(handlePassword(e))} name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          
          </div>

          <div>
            <button type="submit" onClick={(e)=> {handleSignup(e)}}className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1-3a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v1a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </span>
             Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;