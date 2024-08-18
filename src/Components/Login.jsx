import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useSelector } from "react-redux";
import languageData from "../utils/Language";
import SplashScreen from "./SplashScreen"; // Import the SplashScreen component

function Login() {
  const languageSelect = useSelector((store) => store.config?.lang);
  const language = languageData[languageSelect] || languageData.en;
  const [isSignIn, setIsSignIn] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [msg, setMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  useEffect(() => {
    // Check authentication status and set the splash screen visibility
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setShowSplash(false); // Hide splash screen if user is authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  const handleClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setMsg(message);

    if (!message) {
      setShowSplash(true); // Show splash screen during authentication

      const authPromise = isSignIn
        ? signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
        : createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );

      authPromise
        .then(() => {
          setShowSplash(false); // Hide splash screen after authentication
        })
        .catch((error) => {
          setMsg(`${error.code} - ${error.message}`);
          setShowSplash(false); // Hide splash screen if there's an error
        });
    }
  };

  const handleSign = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <Header />
      {showSplash ? (
        <SplashScreen /> // Show splash screen during sign-in or sign-up
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/304b7563-abfe-41bf-95d0-8bb58c03bea6/US-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_633da30f-4247-4a0f-b146-0501cbf91542_small.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-96">
            <h1 className="text-white text-3xl font-bold mb-4">
              {isSignIn ? language.signIn : language.signUp}
            </h1>
            <form
              className="flex flex-col text-white"
              onSubmit={(e) => e.preventDefault()}
            >
              {!isSignIn && (
                <input
                  type="text"
                  ref={name}
                  placeholder={language["Enter your Name"]}
                  className="p-2 m-2 rounded-lg focus:outline-none bg-gray-600"
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder={language["Email Address"]}
                className="p-2 m-2 rounded-lg focus:outline-none bg-gray-600"
              />
              <input
                ref={password}
                type="password"
                placeholder={language.Password}
                className="p-2 m-2 rounded-lg focus:outline-none bg-gray-600"
              />
              <button
                className="p-4 m-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:bg-red-700 focus:outline-none"
                onClick={handleClick}
              >
                {isSignIn ? language.signIn : language.signUp}
              </button>
              {msg && <strong className="text-red-500">{msg}</strong>}
              <p className="text-white text-xs mb-4">
                {isSignIn ? (
                  <>
                    {language["New to MovieFix ?"]}
                    <span
                      className="text-white font-bold text-md cursor-pointer"
                      onClick={handleSign}
                    >
                      {language.signUp}
                    </span>
                  </>
                ) : (
                  <>
                    {language["Already have an account"]}
                    <span
                      className="text-white font-bold text-md cursor-pointer"
                      onClick={handleSign}
                    >
                      {language.signIn}
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
