import React from 'react';
import { styled } from "baseui";

// @ts-ignore
const Flicker = styled("div", ({$theme}) => ({
    animationDuration: "1.2s",
    animationIterationCount: "infinite",
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

export { Flicker }
