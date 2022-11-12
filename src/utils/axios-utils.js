import axios from "axios";

const client = axios.create({ baseUrl: "http://localhost:3000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // catch errors and add additional logging here
    return error;
  };
  console.log("this is the options", options);

  return client(options).then(onSuccess).catch(onError);
};
