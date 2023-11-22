import {put, takeLatest, all} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  FORGOTPASSWORDMAIL_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  SENT_OTP_REQUEST,
  SEARCH_BARCODE_REQUEST,
} from '../constats/actionType';
import {
  loginStarted,
  loginSuccess,
  loginFailure,
  SignupStarted,
  SignupSuccess,
  SignupFailure,
  forgetPassStarted,
  forgetPassSuccess,
  forgetPassFailure,
  sentOTPStarted,
  sentOTPSuccess,
  sentOTPFailure,
  ChangePasswordStarted,
  ChangePasswordSuccess,
  ChangePasswordFailure,
  SearchBarcodeStarted,
  SearchBarcodeSuccess,
  SearchBarcodeFailure,
} from '../actions';
import BaseModel from '../../Models/BaseModel';
import {showMessage} from '../../Utility/Utility';

/////////////////////////////////////////////////////
function isValidResponseWithoutAlert(responseObj) {
  if (responseObj && responseObj.data) {
    if (!responseObj.data.error) {
      return true;
    } else {
      return false;
    }
  } else {
    setTimeout(() => {
      showMessage(true, 'Internal Server Error');
    }, 100);
    return false;
  }
}

////////////////////Change for post API/////////////////////////////////
function isValidPostResponseWithoutAlert(responseObj) {
  if (responseObj && responseObj.data) {
    if (responseObj.data) {
      return true;
    } else {
      return false;
    }
  } else {
    setTimeout(() => {
      showMessage(true, 'Internal Server Error');
    }, 100);
    return false;
  }
}

// Saga method for LOGIN request///////////////////////////////
export function* onLoginRequest(action) {
  try {
    yield put(loginStarted());
    const responseObj = yield BaseModel.login(action.requestBody);
    if (isValidPostResponseWithoutAlert(responseObj, false)) {
      yield put(loginSuccess(responseObj));
    } else {
      yield put(loginFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(loginFailure());
  }
}

// Saga method for LOGIN request///////////////////////////////

export function* onRegisterRequest(action) {
  try {
    yield put(SignupStarted());
    const responseObj = yield BaseModel.Register(action.requestBody);
    if (isValidPostResponseWithoutAlert(responseObj, false)) {
      yield put(SignupSuccess(responseObj));
    } else {
      yield put(SignupFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(SignupFailure());
  }
}

//////////Forget password email //////

export function* onForgetPasswordRequest(action) {
  console.log('action>>>>>>>>', action);
  try {
    yield put(forgetPassStarted());
    const responseObj = yield BaseModel.ForgetPassword(action.requestBody);
    console.log('action,,,,,,,,,,,,,,,', responseObj);
    if (isValidPostResponseWithoutAlert(responseObj, false)) {
      yield put(forgetPassSuccess(responseObj));
    } else {
      yield put(forgetPassFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(forgetPassFailure());
  }
}

/////////Change password..............................////////

export function* onchangepassword(action) {
  console.log('action>>>>>>>>', action);
  try {
    yield put(ChangePasswordStarted());
    const responseObj = yield BaseModel.ResetPassword(action.requestBody);
    if (isValidPostResponseWithoutAlert(responseObj, false)) {
      yield put(ChangePasswordSuccess(responseObj));
    } else {
      yield put(ChangePasswordFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(ChangePasswordFailure());
  }
}

//////////////////////////////////////////////OTP////////////////////////////

export function* onOtpSend(action) {
  console.log('action>>>>>>>>', action);
  try {
    yield put(sentOTPStarted());
    const responseObj = yield BaseModel.SearchBarcode(action.requestBody);
    if (isValidPostResponseWithoutAlert(responseObj, false)) {
      yield put(sentOTPSuccess(responseObj));
    } else {
      yield put(sentOTPFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(sentOTPFailure());
  }
}

// Search Barcode

export function* onSearchBarcode(action) {
  console.log('action>>>>>>>>', action);
  try {
    yield put(SearchBarcodeStarted());
    const responseObj = yield BaseModel.SearchBarcode(action.requestBody);
    if (isValidPostResponseWithoutAlert(responseObj, false)) {
      yield put(SearchBarcodeSuccess(responseObj));
    } else {
      yield put(SearchBarcodeFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(SearchBarcodeFailure());
  }
}

export function* actionWatcher() {
  yield takeLatest(LOGIN_REQUEST, onLoginRequest);
  yield takeLatest(REGISTER_REQUEST, onRegisterRequest);
  yield takeLatest(FORGOTPASSWORDMAIL_REQUEST, onForgetPasswordRequest);
  yield takeLatest(CHANGE_PASSWORD_REQUEST, onchangepassword);
  yield takeLatest(SENT_OTP_REQUEST, onOtpSend);
  yield takeLatest(SEARCH_BARCODE_REQUEST, onSearchBarcode);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
