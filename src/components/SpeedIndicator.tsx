import React from 'react';
import {styled, useStyletron} from "baseui";

type Props = {
    speed: number,
    range: number,
    goal: number
}

const BarLayer = styled('div', {
    height: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
})

const SpeedIndicator = ({ speed, range, goal} : Props) => {
    const [css, theme] = useStyletron()

    const effectiveSpeed = Math.min(Math.max((goal - range), speed), goal + range)

    const position = (((effectiveSpeed / goal) / 2) * 100).toFixed(0)

    console.log({
        effectiveSpeed,
        position
    })

    return (
        <BarLayer
            className={css({
                width: '100%',
                minWidth: '400px',
                backgroundColor: theme.colors.primary,
                position: "relative"
            })}
        >
            <BarLayer className={css({
                width: '50%',
                backgroundColor: theme.colors.warning,
            })}>
                <BarLayer className={css({
                    width: '20%',
                    backgroundColor: theme.colors.accent400
                })}>
                    <BarLayer className={css({
                        width: '2px',
                        background: 'black',
                        position: 'absolute',
                        left: `${position}%`,
                        transition: 'all .5s'
                    })} />
                </BarLayer>
            </BarLayer>
        </BarLayer>
    )
}

export { SpeedIndicator }
