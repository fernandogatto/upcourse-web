import styled, { keyframes } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Container = withTheme(styled.div`
    width: 100vw;
    height: 100vh;

    > main {
        height: 100vh;

        .signIn-image {
            background-size: cover;
            background-color: #fafafa;
            background-image: url(https://source.unsplash.com/random);
            background-repeat: no-repeat;
            background-position: center;
        }

        .signIn-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            padding: 64px;
            animation: ${appearFromRight} 1s;

            @media(max-width: 576px) {
                padding: 64px 32px;
            }

            > img {
                margin-bottom: 32px;
            }

            h1 {
                text-align: center;
                margin-bottom: 32px;
                color: ${props => props.theme.palette.primary.main};
            }

            form {
                position: relative;

                > div {
                    width: 100%;
                }

                div + div {
                    margin-top: 16px;
                }

                button {
                    margin: 21px auto 0;

                    display: inherit;
                }
            }
        }
    }

`);

export const Loading = withTheme(styled.div`
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: -50px;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        margin: auto;
        border-radius: 50%;
        border: 3px solid ${props => props.theme.palette.primary.main};
        border-color: ${props => props.theme.palette.primary.main} transparent
            ${props => props.theme.palette.primary.main} transparent;
        animation: spinner 1.2s linear infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`);
