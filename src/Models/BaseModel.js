/* eslint-disable prettier/prettier */
import {callApi, getAPI, callUploadApi} from '../Utility/Api';
import * as apiUrl from '../Utility/ApiUrl';

export default class BaseModel {
  static login(requestBody) {
    console.log('check modal', requestBody);
    return callApi('POST', apiUrl.LoginUrl, requestBody);
  }

  static Register(requestBody) {
    return callApi('POST', apiUrl.RegisterURL, requestBody);
  }

  static ForgetPassword(requestBody) {
    return callApi('POST', apiUrl.ForgetPassURL, requestBody);
  }

  static ChangePassword(requestBody) {
    return callApi('PUT', apiUrl.ChangePassURL, requestBody);
  }

  static OtpSend(requestBody) {
    return callApi('POST', apiUrl.OtpSendURL, requestBody);
  }

  static SearchBarcode(requestBody) {
    return callApi('POST', apiUrl.SearchBarcode, requestBody);
  }
}
