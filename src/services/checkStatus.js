export default function checkStatus(response) {
  console.log('response: ', response);
  console.log('cookie: ', response.headers.get('set-cookie'));
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    return response.json().then(err => {
      throw err;
    });
  }
}