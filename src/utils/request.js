import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useRef, useEffect } from "react";
import { Alert, View } from "react-native";
import Config, { SUCCESS } from "../../src/utils/constants/Config";
import AxiosInstance from "./Intercepter";
//import config from "../config";
import { useDispatch, useSelector } from "react-redux";

//Post Request
export async function post(api, data) {
  return (
    AxiosInstance.post(`${Config.URL}${api}`, data)
      //return AxiosInstance.post(Config.URL + api, data)
      .then((res) => {
        if (res.status == 200 && !res.data.status) {
          return {
            ...res.data,
            status: "success",
          };
        }
        return res.data;
      })
      .catch((err) => (err && err.response ? err.response : err))
  );
}

//Get Request
export async function get(api, data) {
  return AxiosInstance.get(`${Config.URL}${api}`)
    .then((res) => {
      if (res.status == 200 && !res.data.status) {
        return {
          ...res.data,
          status: "success",
        };
      }
      return res.data;
    })
    .catch((err) => err);
}
export async function getWebView(api, data) {
  debugger;
  return AxiosInstance.get(`${Config.URL}${api}`)
    .then((res) => {
      if (res.status == 200 && !res.data.status) {
        return {
          data: res.data,
          status: "success",
        };
      }
      return res.data;
    })
    .catch((err) => err);
}
//Put Request
export async function put(api, data) {
  return AxiosInstance.put(`${Config.URL}${api}`, data)
    .then((res) => res.data)
    .catch((err) => err.response);
}

//Delete Request
export async function deleteRequest(api, data) {
  return AxiosInstance.delete(`${Config.URL}${api}`, { data: data })
    .then((res) => res.data)
    .catch((err) => err.response);
}

//Get All Request
export async function getAll(data) {
  debugger;
  return Promise.all(data)
    .then((values) => {
      debugger;
      return values;
    })
    .catch((err) => {
      debugger;
      return err;
    });
}

// Get Token
export async function getAccessTokenFromCookies() {
  return new Promise(async (resolve, reject) => {
    let token = await AsyncStorage.getItem("token");
    if (token) {
      resolve(token);
    } else {
      reject(true);
    }
  });
}
// Get Language
