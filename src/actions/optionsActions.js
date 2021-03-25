import axios from 'axios';

export const getOptions = (lang, APILink, dispatch) => {
    return dispatch => {
        dispatch(fetchOptionsBegin());
        return axios.get(APILink)
            .then(json => {
                dispatch(fetchOptionsSuccess(json.options[lang]));
                return json.options[lang];
          })
            .catch(error =>
                dispatch(fetchOptionsFailure(error))
          );
        }
    }

export const FETCH_OPTIONS_BEGIN   = 'FETCH_OPTIONS_BEGIN';
export const FETCH_OPTIONS_SUCCESS = 'FETCH_OPTIONS_SUCCESS';
export const FETCH_OPTIONS_FAILURE = 'FETCH_OPTIONS_FAILURE';

export const fetchOptionsBegin = () => ({
    type: FETCH_OPTIONS_BEGIN
  });
  
export const fetchOptionsSuccess = options => ({
    type: FETCH_OPTIONS_SUCCESS,
    payload: { options }
  });
  
export const fetchOptionsFailure = error => ({
    type: FETCH_OPTIONS_FAILURE,
    payload: { error }
  });