import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import Drawers from "./Drawer";
import { GlobalContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const {dispatch} = useContext(GlobalContext)
  const navigate = useNavigate()
  function handleChange(e){
    navigate('/search')
    dispatch({type:"search",payload:{[e.target.name]:e.target.value}})
  }
  return (
    <div className="bg-black h-12 w-full text-white fixed top-0">
      <div className="flex justify-between mx-4 ">
          <Drawers />
        <div className="my-auto relative">
          <input type="text" name="search" placeholder="search movie" onChange={handleChange} className="text-center text-black rounded-lg" />
          <button><CiSearch className="text-2xl absolute right-0 top-0 bg-yellow-700 rounded-full"/></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
