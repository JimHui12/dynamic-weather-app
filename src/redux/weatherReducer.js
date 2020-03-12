import {
    CHANGE_LIMIT, 
    FETCH_DATA, 
    FETCH_DATA_SUCCESS
} from './weatherActions';


const initialState = {
    limit: 5,
    forecasts:[],
    condition: {},
    city: [],
    isLoading: false,

};

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_LIMIT:
            return {
                ...state,
                limit: action.limit,
            };
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_DATA_SUCCESS:
            const city = action.data.city.name;
            const condition = action.data.current;   
            const forecasts = action.data.forecast.slice(0, 10); 
            
            return {
                ...state,
                isLoading: false,
                city,
                condition,
                forecasts,
            };

        default:
            return state;
    }
};

export default weatherReducer;