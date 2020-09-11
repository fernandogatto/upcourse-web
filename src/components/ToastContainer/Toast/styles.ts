import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
    type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
    info: css`
        background: #ebf8ff;
        color: #3172b7;
    `,
    success: css`
        background: #e6fffa;
        color: #2e656a;
    `,
    error: css`
        background: #fddede;
        color: #c53030;
    `,
}

export const Container = styled(animated.div)<ContainerProps>`
    position: relative;
    width: 360px;
    padding: 16px 30px 16px 16px;
    border-radius: 16px;
    box-shadow: 2px 2px 8px rgba(0,0,0,.2);
    display: flex;

    & + div {
        margin-top: 8px;
    }

    ${props => toastTypeVariations[props.type || 'info']}

    > svg {
        margin-right: 12px;
    }

    div {
        flex: 1;

        p {
            margin-top: 4px;
            font-size: 14px;
            opacity: .8;
            line-height: 20px;
        }
    }

    button {
        position: absolute;
        right: 16px;
        top: 16px;
        opacity: .6;
        background: transparent;
        color: inherit;
        border: 0;
        cursor: pointer;
    }
`;
