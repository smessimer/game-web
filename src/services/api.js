import headers from "./headers";
import checkStatus from "./checkStatus";

// Should move this to config soon
const HOST_URL = "http://localhost:3000";

const Api = {
  get: (endpoint) => {
    return fetch(`${HOST_URL}${endpoint}`, {
      method: "GET",
      headers: headers()
    }).then(checkStatus);
  },
  post: (endpoint, payload) => {
    return fetch(`${HOST_URL}${endpoint}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(payload)
    })
    .then(checkStatus)
  }
};

export default Api;