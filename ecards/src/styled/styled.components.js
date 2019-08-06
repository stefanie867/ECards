import styled, {css} from 'styled-components';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';

export const StyledDiv = styled.div`
    display: flex;
    flexWrap: wrap;
    justify-cntent: space-around;
    overflow: hidden;
    background-color: theme.palette.background.paper;
`;

export const StyledCard = styled(Card)`
    max-width: 345px;
`;

export const StyledAvatar = styled(Avatar)`
    &.MuiAvatar-root {background-color: #f44336;}
`;

export const StyledCardMedia = styled(CardMedia)`
    height: 0;
    padding-top: 56.25%;
`;

export const StyledIconButton = styled(IconButton)`
    &.MuiIconButton-root {
        margin-left: auto;
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        });
        ${props => !props.expanded && css`
            transform: rotate(0deg);
        `}
        ${props => props.expanded && css`
            transform: rotate(180deg);
        `}
    }
`;