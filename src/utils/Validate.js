export const checkValidate = (email, pass) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
  // const isNameValid = /^[A-ZÀ-ÿ][-,a-z. ']+$/.test(name);

  if (!isEmailValid) return "*Email ID is not valid";
  if (!isPassValid) return "*Password not valid";
  // if(!isNameValid)  return "Name is not valid";
  return null; // Return null if both email and password are valid
};
