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
  const [val, setVal] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [msg, setMsg] = useState("");

  const language = languageData[languageSelect] || languageData.en;

  useEffect(() => {
    // Check authentication status and set the splash screen visibility
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  const handleClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setMsg(message);

    if (message == null) {
      setShowSplash(true); // Show splash screen during authentication

      const authPromise = !val
        ? createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
        : signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );

      authPromise
        .then((userCredential) => {
          const user = userCredential.user;
          // Handle post-authentication logic
          setShowSplash(false); // Hide splash screen after authentication
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsg(`${errorCode} - ${errorMessage}`);
          setShowSplash(false); // Hide splash screen if there's an error
        });
    }
  };

  const handleSign = () => {
    setVal(!val);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <Header />
      {showSplash ? (
        <SplashScreen /> // Show splash screen during sign-in or sign-up
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.pinimg.com/564x/92/14/8a/92148ae16c20ddbdbe85beb1e9ea6082.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-96">
            <h1 className="text-white text-3xl font-bold mb-4">
              {val ? language.signIn : language.signUp}
            </h1>
            <form
              className="flex flex-col text-white"
              onSubmit={(e) => e.preventDefault()}
            >
              {val ? (
                ""
              ) : (
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
                {val ? language.signIn : language.signUp}
              </button>
              {msg === "" ? (
                ""
              ) : (
                <strong className="text-red-500">{msg}</strong>
              )}
              <p className="text-white text-xs mb-4">
                {val ? (
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
