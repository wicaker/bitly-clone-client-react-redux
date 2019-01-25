import { axiosInstance } from '../../config/Api';

export const createShortUrl = url => dispatch => {
  axiosInstance
    .post("/api/shorters", url)
    .then(res => {
      console.log(res);
      dispatch({ type: "SHORT_URL_SUCCESS", res });
    })
    .catch(err => {
      dispatch({ type: "SHORT_URL_ERROR", err });
    });
};
