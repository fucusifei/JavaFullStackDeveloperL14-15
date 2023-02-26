import {
  getToken,
} from 'token';

const getHeaders = () => ({
  Accept: 'application/json',
  Authorization: `Bearer ${getToken()}`,
  'Content-Type': 'application/json',
});

const fetchGet = ({ params = {}, url }) => {
  url = new URL(url);
  url.search = new URLSearchParams(params).toString();
  return fetch(
    url,
    {
      headers: getHeaders(),
      method: 'GET',
    }
  );
};
const fetchGetById = ({url}) => {
  return fetch(
      url.toString(),
      {
        headers: getHeaders(),
        method: 'GET',
      }
  );
};
const fetchPost = ({ body, params = {}, url }) => {
  url = new URL(url);
  url.search = new URLSearchParams(params).toString();

  return fetch(
    url,
    {
      body: JSON.stringify(body),
      headers: getHeaders(),
      method: 'POST',
    }
  );
};
const fetchPostAnimal = ({ body, params = {}, url }) => {
  url = new URL(url);
  url.search = new URLSearchParams(params).toString();
  return fetch(
      url,
      {
        body: JSON.stringify(body.newAnimal),
        headers: getHeaders(),
        method: 'POST',
      }
  );
};
const fetchPutAnimal = ({ body, params = {}, url }) => {
  url = new URL(url);
  url.search = new URLSearchParams(params).toString();
  return fetch(
      url,
      {
        body: JSON.stringify(body.newAnimal),
        headers: getHeaders(),
        method: 'PUT',
      }
  );
};
const fetchDelete = ({ params = {}, url }) => {
  url = new URL(url);
  url.search = new URLSearchParams(params).toString();
  return fetch(
      url,
      {
        method: 'DELETE',
      }
  );
};
export const getJsonById = ({params,url,}) => {
  return fetchGetById({
    params,
    url,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
};

export const getJson = ({
  params,
  url,
}) => {
  return fetchGet({
    params,
    url,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
};
export const postJson = ({
                             body,
                             params,
                             url,
                         }) => {
    return fetchPost({
        body,
        params,
        url,
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    });
};
export const postJsonAnimal = ({
  body,
  params,
  url,
}) => {
  return fetchPostAnimal({
    body,
    params,
    url,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
};
export const deleteJson = ({params,url}) => {
  return fetchDelete({
    params,
    url,
  });
};
export const putJson = ({
                           body,
                           params,
                           url,
                         }) => {
  return fetchPutAnimal({
    body,
    params,
    url,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
};