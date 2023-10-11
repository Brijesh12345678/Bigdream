import {
  SET_CONNECTION_STATUS,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_STARTED,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FORGOTPASSWORDMAIL_STARTED,
  FORGOTPASSWORDMAIL_SUCCESS,
  FORGOTPASSWORDMAIL_FAILURE,
  CHANGE_PASSWORD_STARTED,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  SENT_OTP_STARTED,
  SENT_OTP_SUCCESS,
  SENT_OTP_FAILURE,

  SEARCH_BARCODE_STARTED,
  SEARCH_BARCODE_SUCCESS,
  SEARCH_BARCODE_FAILURE,

} from '../constats/actionType';

import Immutable from 'seamless-immutable';

import {createReducer} from '../util/reduxUtil';

export const initialState = Immutable.from({
  isConnected: false,
  loading: false,
  app: {
    loginLoading: false,
    registrationLoading: false,
    forgetpassLoading: false,
    changePasswordLoading: false,
    otpLoading: false,
    loginData: null,
    registerData: null,
    forgetpassData: null,
    ChangePasswordData: null,
    OTPRequestData: null,
    SearchBarcodeData:null
  },
});

export const onSetConnectionStatus = (state, status) => {
  return state.setIn(['isConnected'], status.status);
};

//////////////////////////////Login Reducer/////////////////////////////////////////////////////
export const onLoginStarted = state =>
  state.merge({
    app: state.app.merge({
      loginData: initialState.app.loginData,
      loginLoading: true,
    }),
  });
export const onLoginSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      loginData: response,
      loginLoading: false,
    }),
  });
export const onLoginFailure = state =>
  state.merge({
    app: state.app.merge({
      loginData: initialState.app.loginData,
      loginLoading: false,
    }),
  });

////Register UI Reducer/////

export const onRegisterStarted = state =>
  //  {console.log("hiii")}
  state.merge({
    app: state.app.merge({
      registerData: initialState.app.registerData,
      loginLoading: true,
    }),
  });
export const onRegisterSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      registerData: response,
      loginLoading: false,
    }),
  });
export const onRegisterFailure = state =>
  state.merge({
    app: state.app.merge({
      registerData: initialState.app.registerData,
      loginLoading: false,
    }),
  });

///////////// Forget password mail ///////

export const onForgetPasswordMailStarted = state =>
  //  {console.log("hiii")}
  state.merge({
    app: state.app.merge({
      forgetpassData: initialState.app.forgetpassData,
      forgetpassLoading: true,
    }),
  });
export const onForgetPasswordMailSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      forgetpassData: response,
      forgetpassLoading: false,
    }),
  });
export const onForgetPasswordMailFailure = state =>
  state.merge({
    app: state.app.merge({
      forgetpassData: initialState.app.forgetpassData,
      forgetpassLoading: false,
    }),
  });

///////////Change Password reducer//////////////////////
export const onChangePasswordStarted = state =>
  state.merge({
    app: state.app.merge({
      ChangePasswordData: initialState.app.ChangePasswordData,
      changePasswordLoading: true,
    }),
  });
export const onChangePasswordSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      ChangePasswordData: response,
      changePasswordLoading: false,
    }),
  });
export const onChangePasswordFailure = state =>
  state.merge({
    app: state.app.merge({
      ChangePasswordData: initialState.app.ChangePasswordData,
      changePasswordLoading: false,
    }),
  });

/////////otp request data///////////////////////
export const onOTPSentStarted = state =>
  state.merge({
    app: state.app.merge({
      OTPRequestData: initialState.app.OTPRequestData,
      otpLoading: true,
    }),
  });
export const onOTPSentSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      OTPRequestData: response,
      otpLoading: false,
    }),
  });
export const onOTPSentFailure = state =>
  state.merge({
    app: state.app.merge({
      OTPRequestData: initialState.app.OTPRequestData,
      otpLoading: false,
    }),
  });

// SEARCH BARCODE 


export const onSearchBarcodeStarted = state =>
  state.merge({
    app: state.app.merge({
      SearchBarcodeData: initialState.app.SearchBarcodeData,
      loginLoading: true,
    }),
  });
export const onSearchBarcodeSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      SearchBarcodeData: response,
      loginLoading: false,
    }),
  });
export const onSearchBarcodeFailure = state =>
  state.merge({
    app: state.app.merge({
      SearchBarcodeData: initialState.app.SearchBarcodeData,
      loginLoading: false,
    }),
  });



const appReducer = createReducer(initialState, {
  [SET_CONNECTION_STATUS]: onSetConnectionStatus,

  [LOGIN_STARTED]: onLoginStarted,
  [LOGIN_SUCCESS]: onLoginSuccess,
  [LOGIN_FAILURE]: onLoginFailure,

  [REGISTER_STARTED]: onRegisterStarted,
  [REGISTER_SUCCESS]: onRegisterSuccess,
  [REGISTER_FAILURE]: onRegisterFailure,

  [FORGOTPASSWORDMAIL_STARTED]: onForgetPasswordMailStarted,
  [FORGOTPASSWORDMAIL_SUCCESS]: onForgetPasswordMailSuccess,
  [FORGOTPASSWORDMAIL_FAILURE]: onForgetPasswordMailFailure,

  [CHANGE_PASSWORD_STARTED]: onChangePasswordStarted,
  [CHANGE_PASSWORD_SUCCESS]: onChangePasswordSuccess,
  [CHANGE_PASSWORD_FAILURE]: onChangePasswordFailure,

  [SENT_OTP_STARTED]: onOTPSentStarted,
  [SENT_OTP_SUCCESS]: onOTPSentSuccess,
  [SENT_OTP_FAILURE]: onOTPSentFailure,

  [SEARCH_BARCODE_STARTED]: onSearchBarcodeStarted,
  [SEARCH_BARCODE_SUCCESS]: onSearchBarcodeSuccess,
  [SEARCH_BARCODE_FAILURE]: onSearchBarcodeFailure,
});
export default appReducer;
