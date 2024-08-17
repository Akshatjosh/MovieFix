import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userslice";

import { languages } from "../utils/constant";
import { changeLang } from "../utils/configSlice";
import languageData from "../utils/Language";

function Header() {
  const languageSelect = useSelector((store) => store.config?.lang);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // Handle sign-out error.
        console.error("Sign-out error", error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // ...
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, [auth, dispatch, navigate]);

  const handleChangeLang = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const language = languageData[languageSelect] || languageData.en;

  return (
    <div className="fixed z-10 top-0 left-0 right-0 px-4 md:px-8 py-2 md:py-4 bg-gradient-to-b from-black  flex justify-between items-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-red-600 font-bold">
        {language.MovieFix}
      </h1>
      <div>
        {user ? (
          <div className="flex gap-2">
            <select
              className="p-2 m-2 bg-red-800 text-white"
              onChange={handleChangeLang}
              value={languageSelect}
            >
              {languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleSignOut}
              className="px-3 rounded-lg md:px-4 py-1 md:py-2 bg-red-500 text-white font-bold text-sm md:text-base"
            >
              {language.signOut}
            </button>
          </div>
        ) : (
          <select
            className="p-2 m-2 bg-red-800 text-white"
            onChange={handleChangeLang}
            value={languageSelect}
          >
            {languages.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default Header;
