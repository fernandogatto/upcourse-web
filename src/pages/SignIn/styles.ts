import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
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

            h1 {
                text-align: center;
                margin-bottom: 32px;
            }

            form {
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

`;
