import axios from "axios";
import Bill1 from "../data/Bill1";
import update1 from "../data/update1";
import {
  IMAGE_UPLOAD_FAIL,
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
} from "../constants/uploadImageConstant";
import {
  IMAGE_UPDATE_FAIL,
  IMAGE_UPDATE_REQUEST,
  IMAGE_UPDATE_SUCCESS,
} from "../constants/uploadImageConstant";


export const uploadImage = (image) => async (dispatch) => {
  try {
  
    dispatch({
      type: IMAGE_UPLOAD_REQUEST,
    });
    const fd = new FormData();
    fd.append("file", image);
    fd.append("type", "DAILY");

    console.log(fd);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb25zb24iLCJpYXQiOjE2Mzc4MjU3NzAsImV4cCI6MTYzNzgzMDk1NH0.JHvRaUSvC23BMGKxkuxwZ6vkpsLRhQ9Jtqb7Vj3cR5A3sLBr5v4D7RIIUoAnQWWWs4CpJ_t1Lm8vsjX0l6Hd2g`,
      },
    };

    let url = "https://paymentmanagerment.herokuapp.com/api/payment";
    const { data } = await axios.post(url, fd, config);
    // const data= Bill1;
    dispatch({
      type: IMAGE_UPLOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: IMAGE_UPLOAD_FAIL,
      payload:   error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
};

export const updateImage = (image) => async (dispatch) => {
  try {
  
    dispatch({
      type: IMAGE_UPDATE_REQUEST,
    });
    
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb25zb24iLCJpYXQiOjE2Mzc4MjU3NzAsImV4cCI6MTYzNzgzMDk1NH0.JHvRaUSvC23BMGKxkuxwZ6vkpsLRhQ9Jtqb7Vj3cR5A3sLBr5v4D7RIIUoAnQWWWs4CpJ_t1Lm8vsjX0l6Hd2g`,
      },
    };
    
    image=JSON.stringify(image);
    console.log(image);
    let url = "https://paymentmanagerment.herokuapp.com/api/handPayment";
   const { data } = await axios.post(url, image, config);
    // const data= update1;
    dispatch({
      type: IMAGE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: IMAGE_UPDATE_FAIL,
      payload:   error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
};
