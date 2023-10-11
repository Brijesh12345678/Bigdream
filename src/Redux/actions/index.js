/* eslint-disable prettier/prettier */
import {
  SET_CONNECTION_STATUS,
  LOGIN_STARTED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_STARTED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FORGOTPASSWORDMAIL_STARTED,
  FORGOTPASSWORDMAIL_REQUEST,
  FORGOTPASSWORDMAIL_SUCCESS,
  FORGOTPASSWORDMAIL_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_STARTED,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  SENT_OTP_REQUEST,
  SENT_OTP_STARTED,
  SENT_OTP_SUCCESS,
  SENT_OTP_FAILURE,

  SEARCH_BARCODE_REQUEST,
  SEARCH_BARCODE_STARTED,
  SEARCH_BARCODE_SUCCESS,
  SEARCH_BARCODE_FAILURE,
  
} from '../constats/actionType';
import {createAction} from '../util/reduxUtil';

export const setConnectionStatusRequest = status =>
  createAction(SET_CONNECTION_STATUS, {status});

// login action method

export const loginRequest = requestBody =>
  createAction(LOGIN_REQUEST, {requestBody});
export const loginStarted = () => createAction(LOGIN_STARTED);
export const loginSuccess = response => createAction(LOGIN_SUCCESS, {response});
export const loginFailure = () => createAction(LOGIN_FAILURE);

// signup action method

export const SignupRequest = requestBody =>
  createAction(REGISTER_REQUEST, {requestBody});
export const SignupStarted = () => createAction(REGISTER_STARTED);
export const SignupSuccess = response =>
  createAction(REGISTER_SUCCESS, {response});
export const SignupFailure = () => createAction(REGISTER_FAILURE);

////////Forget password mail action method /////

export const forgetPassRequest = requestBody =>
  createAction(FORGOTPASSWORDMAIL_REQUEST, {requestBody});
export const forgetPassStarted = () => createAction(FORGOTPASSWORDMAIL_STARTED);
export const forgetPassSuccess = response =>
  createAction(FORGOTPASSWORDMAIL_SUCCESS, {response});
export const forgetPassFailure = () => createAction(FORGOTPASSWORDMAIL_FAILURE);

///////////otp send request actions////////////////

export const sentOTPRequest = requestBody =>
  createAction(SENT_OTP_REQUEST, {requestBody});
export const sentOTPStarted = () => createAction(SENT_OTP_STARTED);
export const sentOTPSuccess = response =>
  createAction(SENT_OTP_SUCCESS, {response});
export const sentOTPFailure = () => createAction(SENT_OTP_FAILURE);

///////////change password actions//////////
export const ChangePasswordRequest = requestBody =>
  createAction(CHANGE_PASSWORD_REQUEST, {requestBody});
export const ChangePasswordStarted = () =>
  createAction(CHANGE_PASSWORD_STARTED);
export const ChangePasswordSuccess = response =>
  createAction(CHANGE_PASSWORD_SUCCESS, {response});
export const ChangePasswordFailure = () =>
  createAction(CHANGE_PASSWORD_FAILURE);


  /////////// earch Barcode //////////
export const SearchBarcodeRequest = requestBody =>
createAction(SEARCH_BARCODE_REQUEST, {requestBody});
export const SearchBarcodeStarted = () =>
createAction(SEARCH_BARCODE_STARTED);
export const SearchBarcodeSuccess = response =>
createAction(SEARCH_BARCODE_SUCCESS, {response});
export const SearchBarcodeFailure = () =>
createAction(SEARCH_BARCODE_FAILURE);
