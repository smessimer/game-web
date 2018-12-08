import Api from "./api";

export const getUser = (id) => {
  return Api.get(`/users/${id}`, true)
    .catch(err => {
      console.log('getUser error: ', err);
    })
}