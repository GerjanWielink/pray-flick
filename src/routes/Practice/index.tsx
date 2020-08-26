import React, {useState} from 'react';
import {Flicker, SpeedIndicator} from "../../components";
import {styled, useStyletron} from "baseui";
import {PrayerOrb} from "../../components/PrayerOrb";

const PageLayout = styled('div', ({ $theme}) => ({
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridRowGap: '20px',
    placeItems: 'center'
}))

export default () => {
    const [lastClick, setLastCLick] =  useState<number>(new Date().getTime())
    const [prayerOn, togglePrayer] = useState<boolean>(false)
    const [walkingAverage, updateWalkingAverage] = useState<number>(600)

    const [css, theme] = useStyletron()

    const handleClick = () => {
        if (prayerOn) {
            updateAverage()
        }

        togglePrayer(!prayerOn)
    }

    const updateAverage = () => {
        const time = new Date().getTime();

        const clickTime = time - lastClick;
        setLastCLick(time)

        updateWalkingAverage((0.7 * walkingAverage) + (0.3 * clickTime))
    }

    return (
        <Flicker
            className={css({
                display: "grid",
                placeContent: "center",
                textAlign: "center"
            })}

            enabled={Math.abs(walkingAverage - 600) > 30}
        >
            <PageLayout>
                <PrayerOrb
                    enabled={prayerOn}
                    onClick={handleClick}
                    size={'100px'}
                />

                <SpeedIndicator
                    goal={600}
                    speed={walkingAverage}
                />
            </PageLayout>
        </Flicker>
    )
}
