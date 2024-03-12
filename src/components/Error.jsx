import { Link } from "react-router-dom"

function Error() {
  return (
    <div className='text-center my-32 border-2 border-red-600 w-1/4 mx-auto'>
      <h1>Wrong Credentials</h1>
      <p>Invalid username or password</p>
      <div>
      <Link to="/login" className="hover:underline hover:text-red-600 mr-8">Login</Link>
      <Link to="/sign-up" className="hover:underline hover:text-red">Sign Up</Link>
      </div>
    </div>
  )
}

export default Error
