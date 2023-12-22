/*
This function gets the URL as a string when called, and returns
an object containing the values split by /
*/
export const parseRequestURL = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};
