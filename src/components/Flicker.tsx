import React, {ReactElement} from 'react';
import { styled } from "baseui";

type Props = {
    enabled?: boolean,
    className?: string,
    children?: ReactElement
}

// @ts-ignore
const FlickerComp = styled<Props>("div", ({$theme}) => ({
    animationDuration: "1.2s",
    animationIterationCount: "infinite",
    backgroundColor: $theme.colors.primary,
    animationName: {
        '0%': {
            backgroundColor: $theme.colors.primary
        },
        '50%': {
            backgroundColor: $theme.colors.accent
        },
        '100%': {
            backgroundColor: $theme.colors.primary
        }
    }
}))

const Flicker = ({ className, children, enabled = true } : Props) => (
    <FlickerComp className={className} $style={enabled ? {} : { animationName: "" }} >
        { children }
    </FlickerComp>
)


export { Flicker }
