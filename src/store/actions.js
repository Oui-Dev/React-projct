import axios from 'axios';
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from './types.js';

const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    };
};

const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};

const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const data = response.data;
                dispatch(fetchDataSuccess(data));
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(fetchDataFailure(errorMessage));
            });
    };
};
