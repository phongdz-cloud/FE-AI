import {
    CUSGET_PROFILE_REQUEST,
    CUSGET_PROFILE_SUCCESS,
    CUSGET_PROFILE_FAIL,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    CUSUPDATE_PROFILE_REQUEST,
    CUSUPDATE_PROFILE_SUCCESS,
    CUSUPDATE_PROFILE_FAIL,
    CUSGET_PAYMENT_REQUEST,
    CUSGET_PAYMENT_SUCCESS,
    CUSGET_PAYMENT_FAIL,
    CUSDELE_PAYMENT_REQUEST,
    CUSDELE_PAYMENT_SUCCESS,
    CUSDELE_PAYMENT_FAIL,
} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: return { loading: true }
        case USER_LOGIN_SUCCESS: return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL: return { loading: false, error: action.payload }
        case USER_LOGOUT: return {}
        default: return state
    }
}


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST: return { loading: true }
        case USER_REGISTER_SUCCESS: return { loading: false, successRes: action.payload } //, userInfo: action.payload
        case USER_REGISTER_FAIL: return { loading: false, errorRes: action.payload }
        default: return state
    }
}


export const CusProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSGET_PROFILE_REQUEST: return { ...state, loading: true }
        case CUSGET_PROFILE_SUCCESS: return { loading: false, profile: action.payload }
        case CUSGET_PROFILE_FAIL: return { loading: false, profile: action.payload }
        default: return state
    }
}

export const UpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSUPDATE_PROFILE_REQUEST: return { loading: true }
        case CUSUPDATE_PROFILE_SUCCESS: return { loading: false, successRes: action.payload }
        case CUSUPDATE_PROFILE_FAIL: return { loading: false, errorRes: action.payload }
        default: return state
    }
}

export const getPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSGET_PAYMENT_REQUEST: return { getPaymentLoading: true }
        case CUSGET_PAYMENT_SUCCESS: return { getPaymentLoading: false, allPayment: action.payload }
        case CUSGET_PAYMENT_FAIL: return { getPaymentLoading: false, allPayment: action.payload }
        default: return state
    }
}


export const cusDelePaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSDELE_PAYMENT_REQUEST: return { deleLoading: true }
        case CUSDELE_PAYMENT_SUCCESS: return {deleLoading: false, deleSuccess: action.payload }
        case CUSDELE_PAYMENT_FAIL: return { deleLoading: false, deleFail: action.payload }
        default: return state
    }
}
