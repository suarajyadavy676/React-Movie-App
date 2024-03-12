import { useContext, useState } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Context";

function Login() {
  const {dispatch} = useContext(GlobalContext)
  const [loginData,setLoginData] = useState({loginEmail:"",loginPassword:""})
  // console.log(loginData)
  const navigate = useNavigate()

  function handleChange(e){
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  // console.log(state)
  let  {email,password} = JSON.parse(localStorage.getItem("loginData"))

  function handleClick(){

    dispatch({type:"loginInfo",payload:loginData})
    if((loginData.loginEmail == email && loginData.loginPassword == password)){
      // console.log("sucess")
      // why Navigate is not work
      navigate('/action-adventure')
    } else{
      // console.log("un")
      //why Navigate is not work
      navigate("/error")
    }
    // navigate('/')
  }
  return (
    <div>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="email"
              name="loginEmail"
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              required
              onChange={handleChange}
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              name="loginPassword"
              onChange={handleChange}
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <button onClick={handleClick} className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            LOG IN
          </button>

          <Link
            to="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </Link>

          <p className="text-center text-lg">
            No account?
            <Link
              to="/sign-up"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Create One
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Login;
