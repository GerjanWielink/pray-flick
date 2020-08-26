import React from 'react';
import { Flicker } from "../../components";
import {styled, useStyletron} from "baseui";

export default () => {
    const [css, theme] = useStyletron()

    return (
        <Flicker
            className={css({
                height: '100%',
            })}
        />
    )
}
