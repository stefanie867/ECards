import { CARD } from "../actions/card.actions.type";

const cardReducerInitialState = {
    content: [],
    isContentLoading: false
};

const cardReducer = (state = cardReducerInitialState, action) => {
    switch(action.type) {
        case CARD.CONTENT.LOAD_STARTED:
            return {
                ...state,
                isContentLoading: true,
                content: []
            };
        case CARD.CONTENT.LOAD_SUCCESS:
            return {
                ...state,
                isContentLoading: false,
                content: action.payload
            };
        case CARD.CONTENT.LOAD_FAILURE:
            return {
                ...state,
                isContentLoading: false,
                content: []
            };
        default:
            return state;
    }
};

export default cardReducer;