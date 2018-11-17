import Api from "./api";

export const postSignup = (email, password) => {
  return Api.post("/signup",
    {
      email,
      password
    });
}