import Login from "./Login";
import Browse from "./Browse";
import { Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";
function Body() {
  const dispatch = useDispatch();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Browse" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default Body;
