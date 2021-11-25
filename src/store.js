import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import { userLoginReducer,userRegisterReducer,userProfileReducer ,userUpdateProfileReducer} from "./reducers/userReducers"
import {importImageReducer,updateImageReducer} from "./reducers/imageReducers"

const reducer= combineReducers({
    userLogin :userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateProfileReducer,
    uploadImage:importImageReducer,
    updateImage:updateImageReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState={
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware= [thunk]
const store= createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store