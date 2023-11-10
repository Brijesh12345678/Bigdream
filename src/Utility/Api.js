/* eslint-disable no-undef */
'use strict';
import * as AsyncStorage from './AsyncStorage';

// import RNFetchBlob from 'rn-fetch-blob';

export async function callApi(methodType, apiUrl, requestBody, isDelete) {
  console.log('check api', methodType, apiUrl, requestBody);
  let apiResponse;
  const reqOpts = {
    method: methodType,
    redirect: 'follow',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  try {
    const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);
    if (token) {
      reqOpts.headers.Authorization = `Bearer ${token}`;
    }
    if (methodType === 'POST') {
      reqOpts.body = requestBody;
    }

    const response = await fetch(apiUrl, reqOpts);
    console.log('hello====>', reqOpts);
    console.log('response:------------>', response);

    const data = await response.json();
    // console.log('API data:------------->', data);
    apiResponse = {
      data,
      statusCode: response.status,
    };
    // console.log('apiResponse:-------------->', apiResponse);
  } catch (error) {
    apiResponse = {
      error,
      statusCode: response,
    };
    // console.log('callApiError:---------->', error);
  }
  // console.log('response', apiResponse);
  return apiResponse;
}

export async function getAPI(methodType, apiUrl) {
  let apiResponse;
  const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);
  var myHeaders = new Headers();
  if (token) {
    myHeaders.append('Authorization', `Bearer ${token}`);
  }

  var requestOptions = {
    method: methodType,
    headers: myHeaders,
    redirect: 'follow',
  };

  let x = await fetch(apiUrl, requestOptions);
  let y = await x.text();
  console.log('y======>', y);
  const data = JSON.parse(y);
  apiResponse = {
    data,
    statusCode: data.status,
  };
  console.log('apiResponseTwo   ====>', apiResponse);
  return apiResponse;
}

export async function callUploadApi(methodType, apiUrl, requestBody) {
  let apiResponse;
  const reqOpts = {
    method: methodType,
    headers: {
      'content-type': 'multipart/form-data',
      accept: 'application/json',
    },
  };
  try {
    const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);
    if (token) {
      reqOpts.headers.Authorization = `Bearer ${token}`;
    }
    if (methodType === 'POST' || methodType === 'PUT') {
      var formData = new FormData();

      reqOpts.body = formData;
    }
    // console.log('apiUrl, requestBody:------------------>', {apiUrl, requestBody});
    const response = await fetch(apiUrl, {
      body: requestBody,
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    apiResponse = {
      data,
      statusCode: response.status,
    };
  } catch (error) {
    console.log('callApi', error);
  }
  // console.log('response', apiResponse);
  return apiResponse;
}
