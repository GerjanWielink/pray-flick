import React, {useState} from 'react';
import {Flicker, SpeedIndicator} from "../../components";
import {useStyletron} from "baseui";

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

            enabled={Math.abs(walkingAverage - 600) > 60}
        >
            <>
                <div onClick={handleClick}
                    style={{
                        backgroundColor: prayerOn ? 'black' : 'white',
                        padding: 10,
                        borderRadius: '50%',
                        height: 50,
                        width: 50,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '20px'
                    }}
                />
                <SpeedIndicator
                    goal={600}
                    speed={walkingAverage}
                />
            </>
        </Flicker>
    )
}
