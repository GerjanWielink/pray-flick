import React from 'react';
import {styled, useStyletron} from "baseui";

type Props = {
    speed: number,
    goal: number
}

const BarLayer = styled('div', {
    height: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
})

const SpeedIndicator = ({ speed, goal } : Props) => {
    const [css, theme] = useStyletron()

    const effectiveSpeed = Math.min(speed, 2 * goal)

    const position = (((effectiveSpeed / goal) / 2) * 100)


    return (
        <BarLayer
            className={css({
                width: '100%',
                minWidth: '400px',
                backgroundColor: theme.colors.negative300,
                position: "relative"
            })}
        >
            <BarLayer className={css({
                width: '30%',
                left: '35%',
                position: "absolute",
                backgroundColor: theme.colors.warning300,
            })} />

            <BarLayer className={css({
                width: '5%',
                left: '47.5%',
                position: 'absolute',
                backgroundColor: theme.colors.positive300
            })} />

            <BarLayer className={css({
                width: '2px',
                background: 'black',
                position: 'absolute',
                left: `${Math.abs(position - 100)}%`,
                transition: 'all 1s'
            })} />

        </BarLayer>
    )
}

export { SpeedIndicator }
