import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

export const Container = withTheme(styled.div`
    background-color: ${props => props.theme.palette.primary.main};
    padding: 16px 0;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > img {
            height: 36px;
        }

        .container-navbar {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            nav {
                a {
                    text-decoration: none;
                    color: #FFF;
                    text-transform: uppercase;
                    transition: ease all .2s;

                    & + a {
                        margin-left: 21px;
                    }

                    &.active {
                        color: ${props => props.theme.palette.primary.contrastText};
                        font-weight: 700;
                    }

                    &:hover {
                        opacity: .8;
                    }
                }
            }
        }
    }
`);

export const Avatar = withTheme(styled.div`
    margin-left: 32px;

    img {
        height: 36px;
        width: 36px;
        object-fit: cover;
        border-radius: 50%;
        transition: ease all .2s;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
`);
