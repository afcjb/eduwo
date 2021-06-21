import axios from "axios";
import { NEW_SEARCH, GET_DETAILS, IMAGES } from "./types";
import loading from "../loading";

export function newSearch(namePrefix, sort, path) {
  const URL = path
    ? "https://wft-geo-db.p.rapidapi.com"
    : "https://wft-geo-db.p.rapidapi.com/v1";
  const PATH = path ? path : "/geo/cities";
  const APIKEY = "d85bec0979msha747cfb75957e9cp184b54jsnc9de3a88b7df";
  const APIHOST = "wft-geo-db.p.rapidapi.com";
  const params = path
    ? {}
    : {
        limit: 10,
        types: "CITY",
        namePrefix,
        sort: sort ? "-name" : "+name",
      };
  const options = {
    method: "GET",
    url: `${URL}${PATH}`,
    params,
    headers: {
      "x-rapidapi-key": `${APIKEY}`,
      "x-rapidapi-host": `${APIHOST}`,
    },
  };

  return (dispatch) => {
    loading();
    axios(options)
      .then(({ data }) => {
        dispatch({
          type: NEW_SEARCH,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getDetails(id) {
  const URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/";
  const APIKEY = "d85bec0979msha747cfb75957e9cp184b54jsnc9de3a88b7df";
  const APIHOST = "wft-geo-db.p.rapidapi.com";
  const options = {
    method: "GET",
    url: `${URL}${id}`,
    headers: {
      "x-rapidapi-key": `${APIKEY}`,
      "x-rapidapi-host": `${APIHOST}`,
    },
  };

  return (dispatch) =>
    axios(options)
      .then(({ data }) => {
        dispatch({
          type: GET_DETAILS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
}

export function getCityImages() {
  const URL =
    "https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images";
  const options = {
    method: "GET",
    url: URL,
    headers: {
      Accept: "application/vnd.teleport.v1+json,",
    },
  };

  return (dispatch) =>
    axios(options)
      .then(({ data }) => {
        dispatch({
          type: IMAGES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
}
