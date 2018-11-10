import Api from "./api";

export const postLogin = (email, password) => {
  return Api.post("/login",
    {
      user: {
        email,
        password
      }
    });
}