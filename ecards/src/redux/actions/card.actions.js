import {CARD} from './card.actions.type';

export const getContent = () => {
    return (dispatch) => {
        dispatch({type: CARD.CONTENT.LOAD_STARTED});
        return fetch(process.env.API_URL + '/content')
            .then(response => response.json())
            .then(json => dispatch({type: CARD.CONTENT.LOAD_SUCCESS, payload: json}))
            .catch(error => dispatch({type: CARD.CONTENT.LOAD_FAILURE, payload: error}));
    }; 
};