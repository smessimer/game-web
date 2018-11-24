// import Cookies from 'niversal-cookie';
import headers from "./headers";
import checkStatus from "./checkStatus";

// Should move this to config soon
const HOST_URL = "http://localhost:3000";

const Api = {
  get: (endpoint, includeCredentials = false) => {
    return fetch(`${HOST_URL}${endpoint}`, {
      method: "GET",
      headers: headers(),
      credentials: includeCredentials ? 'include' : undefined
    }).then(checkStatus);
  },
  post: (endpoint, payload, includeCredentials = false) => {
    return fetch(`${HOST_URL}${endpoint}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(payload),
      credentials: includeCredentials ? 'include' : undefined
    })
    .then(checkStatus)
  }
};

export default Api;