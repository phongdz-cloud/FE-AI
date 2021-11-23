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
} from "../constants/userConstants"
import axios from 'axios'

const URL = 'http://localhost:8082'

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${URL}/api/signin`, { username, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}


export const register = (username, password, email) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${URL}/api/signup`,{username, password, email}, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        console.log(data)

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data
        })
    }
}

export const CusGetProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CUSGET_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`${URL}/api/customerprofile`, config)

        dispatch({
            type: CUSGET_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CUSGET_PROFILE_FAIL,
            payload: error.response.data
        })
    }
}


export const CusUpdateProfile = (updateData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CUSUPDATE_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`${URL}/api/customer`, updateData, config)

        dispatch({
            type: CUSUPDATE_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CUSUPDATE_PROFILE_FAIL,
            payload: error.response.data
        })
    }
}

