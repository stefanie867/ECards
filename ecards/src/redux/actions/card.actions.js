import {CARD} from './card.actions.type';
import {handleResponse} from '../../api/apiUtils';

export const getContent = () => {
    return (dispatch) => {
        dispatch({type: CARD.CONTENT.LOAD_STARTED});
        return fetch(process.env.API_URL + '/content')
            .then(response => handleResponse(response))
            .then(json => dispatch({type: CARD.CONTENT.LOAD_SUCCESS, payload: json}))
            .catch(error => dispatch({type: CARD.CONTENT.LOAD_FAILURE, payload: error}));
    }; 
};