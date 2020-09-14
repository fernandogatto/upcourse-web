import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #fafafa;
        font: 16px 'Roboto', serif;
        -webkit-font-smoothing: antialiased;
    }

    #user-avatar {
        ul {
            background-color: #19194B;
            padding: 0;

            display: flex;
            flex-direction: column;

            a {
                text-decoration: none;
                color: #FFF;
                text-transform: uppercase;
                text-align: center;
                padding: 10px 20px;
                font-size: 14px;
                transition: ease all .2s;

                &.active {
                    color: #FAE100;
                    background-color: #14143f;
                    font-weight: 700;
                }

                &:hover {
                    opacity: .8;
                }
            }

            button {
                padding: 10px 20px;
                transition: ease all .2s;

                &:hover {
                    opacity: .8;
                }

                span {
                    color: #FFF;
                    font-weight: 400;
                }
            }
        }
    }
`;
