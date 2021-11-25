// src/api/service.js

import axios from "axios";

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: process.env.REACT_APP_API_HOST,
  withCredentials: true, // => you might need this when having the users in the app
});

const errorHandler = (err) => {
  throw err;
};

const handleUpload = (file) => {
  return service
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const saveNewCandle = (newCandle) => {
  return service
    .post("/candles/create", newCandle)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default {
  service,
  handleUpload,
  saveNewCandle,
};
