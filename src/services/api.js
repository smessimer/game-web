import headers from "./headers";
import checkStatus from "./checkStatus";

// Should move this to config soon
const HOST_URL = "localhost:3000";

const Api = {
  get: (endpoint) => {
    return fetch(`${HOST_URL}${endpoint}`, {
      method: "GET",
      headers: headers()
    }).then(checkStatus);
  },
  post: (endpoint, payload) => {
    alert('POST')
    return fetch(`${HOST_URL}${endpoint}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(payload)
    })
    .then(checkStatus)
    .catch(err => {
      console.log("err: ", err)
    });
  }
};

export default Api;