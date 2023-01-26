import axios from 'axios';

/*
 config request header - should passed with axios function
*/
export const config = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=31536000',
    Authorization: '',
  },

  timeout: 20000,
};

/*
 this for parsing full url with main link
*/
export const ParseFullUrl = (url: string) => {
  return 'http://192.168.43.218:8080/api/' + url;
};

/*
 handling errors with axios request when error resolved
*/
const parseErrorRequest = (error: any) => {
  if (error.message === 'Request failed with status code 500') {
    return {
      status: 500,
      response: error.response,
      meta: {message: error.message},
    };
  } else if (error.message === 'Request failed with status code 404') {
    return {status: 404, response: null, meta: {message: error.message}};
  } else if (
    error.message === 'Network Error' ||
    error.message === 'timeout of 30000ms exceeded'
  ) {
    return {status: 400, response: null, meta: {message: error.message}};
  } else if (error.response !== undefined) {
    return {
      status: 403,
      data: error.response,
      meta: error.response.data.meta,
    };
  } else {
    return {status: 402, data: null, meta: error.response.data.meta};
  }
};
/*
 trigger axios by get type
*/

export const requestAction = async (request: any) => {
  console.log(config);
  console.log(ParseFullUrl(request.url));

  if (request.type === 'get') {
    return new Promise((resolve, reject) => {
      axios
        .get(ParseFullUrl(request.url), config)
        .then(function (response) {
          /// Request succesfully
          resolve({
            status: 200,
            ...response.data,
          });
        })
        .catch(function (error) {
          /// Request error
          resolve(parseErrorRequest(error));
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      axios
        .post(ParseFullUrl(request.url), request.payload, config)
        .then(function (response) {
          /// Request succesfully

          resolve({
            status: 200,
            ...response.data,
          });
        })
        .catch(function (error) {
          /// Request error
          resolve(parseErrorRequest(error));
        });
    });
  }
};
