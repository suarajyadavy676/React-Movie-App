import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const [signUpData,setSignUpData] = useState({name:"",email:"",password:""})
  // console.log(signUpData)
  const navigate = useNavigate()
  function handleChange(e){
    setSignUpData({...signUpData,[e.target.name]:e.target.value})
  }
  function handleClick(e){
    e.preventDefault()
    // console.log("click",signUpData)
    localStorage.setItem("loginData",JSON.stringify(signUpData))
    navigate('/login')

  }
  return (
    <div className="w-96 mx-auto mt-20 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold pb-5">SignUp</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Enter Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="abc@mail.com"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="*********"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <p className="text-red-500 pb-5"></p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
            onClick={handleClick}
          >
            Register
          </button>
          <div className="flex items-center text-sm">
            <p>Already have an account?</p>
            <Link to="/login" className="hover:underline hover:text-red-400 ml-1">Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
