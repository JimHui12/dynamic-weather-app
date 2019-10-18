import {getWeatherFor} from '../utils/axios.js';

export const CHANGE_LIMIT = 'CHANGE_LIMIT';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA = 'FETCH_DATA';

export const changeLimitAction = (limit) => ({
    limit,
    type: CHANGE_LIMIT,
});

export const fetchData = () => ({
    type: FETCH_DATA,
});

export const fetchDataSuccess = (data) => ({
    data, 
    type: FETCH_DATA_SUCCESS,
});

export const fetchDataFailure = () => ({
    error,
    type: FETCH_DATA_FAILURE,
})

export const fetchDataThunkAction = city => (dispatch) => {
    dispatch(fetchData());
    
    getWeatherFor(city).then(data => {
        
    });
    
}