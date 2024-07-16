import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // Handle sign-out error.
        console.error("Sign-out error", error);
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-4 md:px-8 py-2 md:py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-red-600 font-bold">
        NETFIX
      </h1>
      <div>
        {user && (
          <button
            onClick={handleSignOut}
            className="px-3 md:px-4 py-1 md:py-2 bg-red-500 text-white font-bold text-sm md:text-base"
          >
            SIGN OUT
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
