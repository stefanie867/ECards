import {connect} from 'react-redux';
import CardsWidget from './Cards.widget';
import {getContent} from '../../redux/actions/card.actions';

const mapStateToProps = (state) => {
    return {
        isContentLoading: state.card.isContentLoading,
        content: state.card.content
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContent: () => dispatch(getContent())
    };
};

const Cards = 
    connect(mapStateToProps, mapDispatchToProps)(CardsWidget);

export default Cards;