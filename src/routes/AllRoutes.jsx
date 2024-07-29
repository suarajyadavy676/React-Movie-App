import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import AllMovie from "../components/AllMovie";
import Search from "./Search";
import Action from "./Action";
import MovieDeatails from "../components/MovieDeatails";
import PrivateRoutes from "../components/PrivateRoutes";
import Error from "../components/Error";
import Background from "../components/Background";

function AllRoutes() {
  return (
    <>
    <Background/>
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AllMovie />} />
      <Route path="/search" element={<Search />} />
      <Route
        path="/action-adventure"
        element={
          <PrivateRoutes>
            <Action />
          </PrivateRoutes>
        }
      />
      <Route
        path="/action-adventure/movie/details/:id"
        element={<MovieDeatails />}
      />
      <Route path="/error" element={<Error />} />
    </Routes>
    </>
  );
}

export default AllRoutes;
