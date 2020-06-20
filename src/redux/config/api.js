import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});

export const TokenAdmin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU5MjQ3OTk1NX0.483NmrQbqkeT5QXg6CyHHdZC4ofEeJ853Y7aFojsnvs";

// Alter defaults after instance has been created
export const setAuthToken = (token = TokenAdmin) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const BASE_URL = "http://localhost:9000";
