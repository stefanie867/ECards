import styled, {css} from 'styled-components';
import { Card, Avatar, CardMedia, IconButton, GridList } from '@material-ui/core';

export const StyledDiv = styled.div`
    display: flex;
    flexWrap: wrap;
    justify-cntent: space-around;
    overflow: hidden;
    background-color: theme.palette.background.paper;
`;

export const StyledGridList = styled(GridList)`
    margin: 2px !important;
`;

export const StyledCard = styled(Card)`
    max-width: 345px;
    margin: 2px;
`;

export const StyledAvatar = styled(Avatar)`
    &.MuiAvatar-root {
        background-color: #f44336;
    }
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